---
layout: post
title: Principal Component Analysis
date: 2016-11-13 21:09:36
categories: Machine Learning
tags:
- machine learning
- dimension reduction
mathjax: true
---

## Target
PCA tries to get a projection panel by minimizing the **projection error** (not error in linear regression)

## How to implement
- Calculate Sigma $\Sigma$ by $\Sigma = \frac{1}{m}*X^T*X$
- Get projection panel $U$ (along with error $S$) by singular value decomposition of $\Sigma$
- Get new data set $Z$ by $Z = X * U$
- Recover original data (approximated) by $X_{approx} = Z * U^T $