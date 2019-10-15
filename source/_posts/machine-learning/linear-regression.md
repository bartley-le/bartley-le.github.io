---
layout: post
title: Linear Regression
date: 2015-10-10
categories: Machine Learning
tags: 
- machine learning
- linear regression
---

Linear regression is used when predicting numeric output from numeric input that has linear relationship.

## Hypothesis Function

$$
x=
\begin{bmatrix}
x_0\\\\
x_1\\\\
...\\\\
x_n
\end{bmatrix}\in
\mathbb{R}^{n+1}, 
\theta=
\begin{bmatrix}
\theta_0\\\\
\theta_1\\\\
...\\\\
\theta_n
\end{bmatrix}\in
\mathbb{R}^{n+1}
$$

$$
h_\theta(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 ...
= \theta^Tx
$$
For convenience, define $x_0=1$ (to use matrix for calculation).

## Cost Function

### Squared Error
{% math %}
J(\theta) = \frac{1}{m}\displaystyle\sum_{i=1}^m{Cost(h_\theta(x^{(i)}), y^{(i)})}

{% endmath %}

{% math %}
Cost(h_\theta(x), y)=\frac{1}{2}(h_\theta(x)-y)^2

{% endmath %}

## Optimization
### Derivative for [Gradient Descent](/2016/10/21/machine-learning/gradient-descent)

{% math %}
\frac{d}{d\theta_j}J(\theta)=\frac{1}{m}\displaystyle\sum_{i=1}^m{(h_\theta(x^{(i)})-y^{(i)})x^{(i)}_j}

{% endmath %}

Update $\theta$:
{% math %}
\theta_j = \theta_j -\frac{\alpha}{m}\displaystyle\sum_{i=1}^m{(h_\theta(x^{(i)})-y^{(i)})x^{(i)}_j}

{% endmath %}

Vectorized implementation:

$$
\theta = \theta - \frac{\alpha}{m} X^{T} (X \theta - y)
$$

### Normal equation
See [Normal Equation for Linear Regression](/2016/10/21/machine-learning/normal-equation-for-linear-regression)