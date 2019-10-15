---
layout: post
title: Pointer in C
date: 2015-10-12
categories: C
tags: 
- c
- pointer
---

## Define Pointer

```c
int* ptr;
```

This declares `ptr` as a pointer to `int`

## Operators

- `*` Operator
  1. Means "Pointer" when assignment and initialization.
  2. Means "Go To" the address it stored.
- `&` Operator
  Means "Get Address".

Usage:

1. Initialization

```c
int i=10;
int* ptr = &i;
```
2. Assignment

```c
int i = 10;
int *ptr;
ptr = &i;
```

## List Pointer

Let's take this as an example.
Notice that type of tha array **must** match that of the pointer.

```c
int a[10];
int *ptr;
```

Assign the address of `a[0]` to pointer `ptr`.

```c
ptr = &a[0];
```

In C, this could be replaced by:

```c
ptr = a;
```

Also, because elements in an array are continuous:

```c
*(ptr+i) == a[i] == *(a+1) // True
```

Remind that `a` could not change, but `ptr` could change.

## String Pointer


## Malloc Function.