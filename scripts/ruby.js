/* global hexo */

'use strict';
const Pinyin = require("pinyin");
const wanakana = require("wanakana");
const Kuroshiro = require("kuroshiro");
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const kuroshiro = new Kuroshiro();

const initialisation = kuroshiro.init(new KuromojiAnalyzer());

// const languagedetect = require("languagedetect");

function make_processor(converter) {
    return async (args) => {
        let [ruby_base, ruby_text] = args.join(' ').split('|').map((v) => v.trim());
        if (!ruby_text) {
            ruby_text = ruby_base;
        }

        return "<ruby><rb>" + ruby_base + "</rb><rp>(</rp><rt>" + await converter(ruby_text) + "</rt><rp>)</rp></ruby>";
    }
}

const pinyin = (ruby) => {
    const pinyinic_ruby = [].concat.apply([], Pinyin(ruby, {
        segment: true
    }));
    return pinyinic_ruby.join(' ');
}

const romaji = wanakana.toRomaji;

const kana = async (ruby) => {
    return await kuroshiro.convert(ruby, { to: "hiragana" });
}

hexo.extend.tag.register('ruby', make_processor((text) => text), {async: true});
hexo.extend.tag.register('pinyin', make_processor(pinyin), {async: true});
hexo.extend.tag.register('romaji', make_processor(romaji), {async: true});

hexo.extend.filter.register('after_post_render', async data => {
    await initialisation;
    if (!data.auto_romaji && !data.auto_kana) return;
    const romaji_processor = make_processor(romaji);
    const kana_processor = make_processor(kana);

    const output = (await Promise.all(Array.prototype.map.call(data.content, async (c) => {
        if (data.auto_romaji && wanakana.isKana(c)) {
            return await romaji_processor([c]);
        } else if (data.auto_kana && wanakana.isKanji(c)) {
            return await kana_processor([c]);
        }
        return c;
    }))).join('');

    data.content = output;
    return data; // resulting HTML string

}, 5);
