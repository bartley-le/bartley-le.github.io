---
layout: post
title: Use GDB to Debug in C
date: 2015-10-12
categories: C
tags: 
- gdb
- debug
- c
---

## Basic

To begin, load the program:

```bash
> gbd [program name]
```

or have core dumped:

```bash
> gdb [program name] [core file]
```

Then [set breakpoints](#set-breakpoint)(as follow) and run the program:

```bash
> run [parameters]
```

## Breakpoints

### Set Breakpoint

Two ways to set break points

- Set break point by function name:

```bash
> break [function name]
```

- Set break point by line number:
```bash
> break [line number]
```

### Show Breakpoints

```bash
> ib
```

or

```bash
> info breakpoint
```


### Delete breakpoint

To delete all break points:
```bash
> delete
```

## Debug in Breakpoint

### Print

Usage:
```bash
> print([variable])
```

### Next:

Usage:
```bash
> next
```
or

```bash
> n
```
