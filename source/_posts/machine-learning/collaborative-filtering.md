---
layout: post
title: Collaborative Filtering
date: 2016-11-15 15:17:11
categories: Machine Learning
tags:
- machine learning
mathjax: true
---

Collarborative filtering is used to learn both parameter $\Theta$ and input $x$ from $y$ at the same time.

## Cost Function
$$J(\Theta, x)=\frac{1}{2}\sum_{(i,j):r(i,j)=1}{((\Theta^{(j)})^T*x^{(i)}-y^{(i, j)})^2} + \frac{\lambda}{2}\sum{\Theta^2} + \frac{\lambda}{2}\sum x^2 $$

Note: $r(i, j)$ returns whether the $y(i, j)$ exists

## Mean Normalization
To let the model predict mean for new users, we normalize all $y$ by mean, then the regualrization will make $\Theta$ zero.