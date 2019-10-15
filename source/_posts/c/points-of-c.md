---
layout: post
title: Points of C
date: 2015-10-10
categories: C
tags: 
- points-set
- - c
---

## Basic

### Head Part

```c
#include <stdio.h> // from system
#include "xx.h" // from current folder
```


## Loops

### For loops

**Usage**:

```c
for (init; condition; increment)
{
   ...
}
```

**Tips**:

1. In "init" part, remember to create a new variable.
2. Start with `0`, use `i<n` to loop `n` times.

### While loops and do-while loops

Usage:

```c
while(condition)
{
   ...
}

do
{
   ...
} while (condition);
```

## Array

### To create an array
```c
int a[4];
```

### Initialization

1. You could initialize the elements partly: when elements provided is less than those in the array, only former elements were assigned.

```c
int a[10]= {0, 1, 2};
```
2. You could only assign elements one by one even assigning same value:

```c
int a[10]= {1, 1, 1, 1, 1, 1, 1, 1, 1, 1};
```
3. Not providing the length is allowed:

```c
// these two are equal
int a[]={1,2,3,4,5};
int a[5]={1,2,3,4,5};
```

## Pointer

Click for more about [pointer in c](/2015/10/12/c/pointer-in-c)

## Struct

Click for more about [struct in c](/2015/10/12/c/struct-in-c)