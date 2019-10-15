---
layout: post
title: Support Vector Machine
date: 2016-10-27 21:54:04
categories: Machine Learning
tags:
- machine learning
- support vector machine
---

## Cost Function
{% math %}
J_\Theta=C\sum{[y * cost_1(\Theta^TX)+(1-y) * cost_0(\Theta^TX)]}+\frac{1}{2} * \sum{\Theta^2}

{% endmath %}

Differences with logistic cost function:
- Replace $sigmoid()$ with $cost_1()$ and $cost_0()$
- No $\frac{1}{m}$
- Instead of $\lambda$ on regulation, $C$ is used (can be treated like $C=\frac{1}{\lambda}$)

### Large Margin Classifier
SVM will maximize the margin to allow variance in test data. Also, it will ignore outliers when $C$ is not too large.

Math behind: Since $cost_1$ and $cost_0$ requires $\Theta'*X$ to be significant, and regularization requires $||\Theta||$ to be small, $||projection X \rightarrow \Theta||$ would be large, which is the margin.

({%math%}\Theta'* X = X' * \Theta' =  ||projection X \rightarrow \Theta||* ||\Theta||
{%endmath%})

(`||x||` denotes the length of vector, and it can be negative)

## Kernel
Kernel is used to perform non linear classification, by using attributes given by kerneling function instead of raw attributes.

Kernel function will calculate the similarity of a data to another(landmark), from 0 to 1(similar).

- Gaussian Kernel

