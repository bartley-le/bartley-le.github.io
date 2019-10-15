---
layout: post
title: Normal Equation for Linear Regression
date: 2016-10-21 23:29:05
categories: Machine Learning
tags:
- machine learning
- normal equation
- linear regression
---

## How Normal Equation Works?
Solve for $\theta$ analytically. 

### Pros
- No need to choose $\alpha$
- No need feature scaling
- Don't need to iterate

### Cons
- Slow when having a lot of features $O(n^3)$ (not using when $n>10^5$)

## Algorithm
- $X$: Design matrix, takes all input data (including $x_0$)

Algorithm:
set $\frac{d}{d\theta_j}J(\theta)$ to 0

Result:
$$\theta=(X^TX)^{-1}X^Ty$$

## Non-invertible $X^TX$
In matlab/octave, `pinv()` will handle the case.

Causes of non-invertible:
- Redundant features (linearly dependent)
    + Delete one of the dependent feature
- Too many features (e.g. $m\le n$)
    + Delete some features
    + Regularization