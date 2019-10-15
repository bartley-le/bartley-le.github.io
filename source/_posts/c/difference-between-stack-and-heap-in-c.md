---
layout: post
title: Differences between Stack and Heap in C
date: 2015-10-14
categories: C
tags:
- c
- stack&heap
---

In this article, I'd like to talk about the memory allocation in C.

## Static Storage Area

What is stored here?

- Global variables
- Static variables

The system would automatically cope with this, so it works steadily.

## Stack(栈)

What is stored here?

- Local variables
- Memories allocated by function `alloca()`

Allocating stack memory is quite efficient, but the size is limited(default as 1M in VC6).

Stack grows downwardly.

Stack memory is freed automatically when a function returned.

## Heap(堆)

What is stored here?

- Memories allocated by function `malloc()`

Heap grows upwardly.

Heap needs to be freed manually by function `free()`

Using heap frequently would cause memory fragments, since they are not continuous.