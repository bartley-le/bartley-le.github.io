---
layout: post
title: Gradient Descent
date: 2016-10-21 20:18:09
categories: Machine Learning
tags: 
- machine learning
- gradient descent
---

## How Gradient Descent Works?
Start with a initial parameter set: $\theta_0, \theta_1, \theta_2, ...$
Keep changing the parameter set to reduce $J(\theta_0, \theta_1, \theta_2, ...)$
Until we hopefully end up at a minimum.
Declare convergence if $J(\theta)$ decreases by less than $10^{-3}$ in one iteration.

### Pros
- Works well even when a lot of features.
- Simple

### Cons
- Needs many iterations.
- Slow

## Algorithm
- $\alpha$: learning rate

repeat until convergence {
$$\theta_i = \theta_i-\alpha\frac{d}{d\theta_i}J(\theta_0, \theta_1, \theta_2, ...)$$
}

**Note:** should update all parameters simultaneously.

## Normalization
See [regularization](/2016/10/21/machine-learning/introduction-to-machine-learning/#Overfitting)

$$
J(\theta)=\sum Cost(h_\theta(x), y)+\lambda\displaystyle\sum_{j=1}^n{\theta^2_j}
$$

## Gradient Checking (numerical gradient)
To identify/debug error(usually back-propagation in neural network), we need to check whether the gradient is calculated correctly. (Should not be on when learning)

{% math %}
\frac{d}{d\Theta_i}J(\Theta)\approx \frac{J(\Theta_i+\epsilon, \Theta_{rest})-J(\Theta_i-\epsilon, \Theta_{rest})}{2\epsilon}

{% endmath %}

usually with $\epsilon=10^{-4}$

## Different Types of Gradient Descent

### "Batch" Gradient Descent
Each step of gradient descent uses all the training samples.
It could be computational expensive to sum all errors.

### Stochastic Gradient Descent
1. Randomly shuffle dataset
2. Update $\Theta$ for each sample
It goes randomly, ends up wondering around local optimum.

### Mini-Batch Gradient Descent
1. Randomly shuffle dataset
2. Update $\Theta$ for each $b$ samples
Somewhere in between batch gradient descent and stochastic gradient descent.

**Advantage than stochastic gradient descent: by using vectorization, calculation could be done faster*


## Preprocessing
### Feature Scaling
Make sure features are on a similar scale, so that we can choose a more proper learning rate.

Usually, get every feature into approximately a $-1\le x_i\le 1$

### Mean Normalization
Replace $x_i$ with $x_i-\mu_i$ to make features have approximately zero mean **(do not apply to $x_0=1$)**

### If $J(\theta)$ is increasing or waving
$J(\theta)$ should decrease after every iteration.
Use smaller $\alpha$

### Combine Features
Just combine features into new features directly.

### Polynomial Regression
Just create new features like $x^2$ and $x^3$ to achieve polynomial regression.