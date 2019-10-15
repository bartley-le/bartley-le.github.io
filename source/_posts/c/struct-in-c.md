---
layout: post
title: Struct in C
date: 2015-10-12
categories: C
tags: 
- c
- struct
---

## Declaration
`struct` is keyword for struct

### Generally
```c
struct tag_name {
	// members
};
```

Note: Two of `tag_name`, `member-list` and `variable-list` must present.

### Using typedef
```c
typedef struct
{
    int a;
    char b;
    double c; 
} Simple2;

//现在可以用Simple2作为类型声明新的结构体变量
Simple2 u1, u2[20], *u3;
```

## Usage

```c
struct COMPLEX
{
    char string[100];
    // Other struct
    struct SIMPLE a;
    // Pointer to itself
    struct COMPLEX *next_node;
};
```