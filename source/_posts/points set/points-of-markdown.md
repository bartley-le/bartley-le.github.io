---
layout: post
title: Points of Markdown
date: 2015-10-11
category: Points-Set
tags: 
- points-set
- markdown
- github
---

## Basic writing

### Paragraphs

Paragraphs in Markdown are just one or more lines of consecutive text followed by one or more blank lines.

You can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading.

```markdown
# The largest heading (an <h1> tag)
## The second largest heading (an <h2> tag)
…
###### The 6th largest heading (an <h6> tag)
```

### Block-quotes

You can indicate block-quotes with a >

```markdown
In the words of Abraham Lincoln:

> Pardon my French
```

### Styling text

```markdown
*This text will be italic*
**This text will be bold**
```

Both bold and italic can use either a * or an _ around the text for styling. This allows you to combine both bold and italic if needed.

```markdown
**Everyone _must_ attend the meeting at 5 o'clock today.**
```

## Lists

### Unordered lists

You can make an unordered list by preceding list items with either a * or a -.

```markdown
* Item
* Item

- Item
- Item
```

### Ordered lists

You can make an ordered list by preceding list items with a number.

```markdown
1. Item 1
2. Item 2
```

### Nested lists

You can create nested lists by indenting list items by two spaces.

```markdown
1. Item 1
  1. A corollary to the above item.
2. Item 2
  * A corollary that does not need to be ordered.
    * This is indented four spaces.
```

## Code syntax highlighting

### In-line formats

Use single back-ticks (\`) to format text in a special mono-space format. Everything within the back-ticks appear as-is, with no other special formatting.

```markdown
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.
```

### Multiple lines

You can use triple back-ticks (\`\`\`) to format text as its own distinct block.

```markdown
``` 
x = 0
x = 2 + 2
``` 
```

### Syntax highlighting

In fenced block, add an optional language identifier for syntax highlighting.
For example, to syntax highlight Ruby code:

```markdown
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
``` 
```

## Links

### Link

You can create an in-line link by wrapping link text in brackets ( `[ ]` ), and then wrapping the link in parentheses ( `( )` ).

For example, to create a hyper-link to www.github.com, with a link text that says, Visit GitHub!, you'd write this in Markdown: `[Visit GitHub!](https://www.github.com)`.

### Image

In-line image:

```markdown
![Alt Msg](URL)
```

Block image:

```markdown
![Alt Msg][URL]
```

## GitHub Flavored Markdown

### underscores in words

Where Markdown transforms underscores (`_`) into italics, GFM ignores underscores in words. To emphasize a portion of a word, use asterisks (`*`).

### URL auto-linking

GFM will auto-link standard URLs, so if you want to link to a URL (instead of setting link text), you can simply enter the URL and it will be turned into a link to that URL.

```markdown
http://example.com
```

becomes: http://example.com

### Strike-through

GFM adds syntax to create strike-through text, which is missing from standard Markdown.

```markdown
~~Mistaken text.~~
```

becomes: ~~Mistaken text.~~

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

You can also add extra pipes on the ends:

```markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

Dashes don't need to match the length of text:

```markdown
| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```

Finally, by including colons : within the header row, you can define text to be left-aligned, right-aligned, or center-aligned:

```markdown
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```

A colon on the **left-most** side indicates a left-aligned column; a colon on the **right-most** side indicates a right-aligned column; a colon on **both** sides indicates a center-aligned column.