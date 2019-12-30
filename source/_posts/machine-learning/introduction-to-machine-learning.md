---
layout: post
title: Introduction to Machine Learning
date: 2016-10-21 19:24:16
categories: Machine Learning
tags:
- machine learning
mathjax: true
---

# Online Courses for machine learning
The [machine learning course from Stanford](https://www.coursera.org/learn/machine-learning/home/welcome) in [coursera](https://coursera.org) is a great and famous resource to learn machine learning. If you want to start learning machine learning, even if you got no foundation, you should take a look at it.

# What is Machine learning?
Machine learning is about using data to get a model that can describe and predict data.
Machine learning includes supervised learning and unsupervised learning.

- Supervised learning is a machine learning which training data are labeled.
- unsupervised learning is a machine learning which training data are not labeled.

## Regression, Supervised
Outputs are real numbers.

**Minimization Algorithms:**
- [Gradient Descent](/2016/10/21/machine-learning/gradient-descent)
- Conjugate Gradient
- BFGS
- L-BFGS

### Linear Regression
Check out [Linear Regression](/2015/10/10/machine-learning/linear-regression)


## Classification, Supervised
Outputs are discrete(0, 1, 2 ......).

- Two-class classification
- Multi-class classification
    + One-vs-all(one-vs-rest): make a classifier for each class

## Clustering, Unsupervised
Output cluster centroids, giving clusters by distance to the centroids

- [K-means](/2016/11/13/machine-learning/k-means)

### Logistic Regression
Check out [Logistic Regression](/2016/10/21/machine-learning/logistic-regression)

## Clustering, Unsupervised

# Over-fitting
Model perform accurate on training model, but do not generalize

Solutions:

1. Reduce number of features
    - Manually select which features to keep
    - Model selection algorithm
2. Regularization
    - Penalize by adding $\lambda\theta$ to cost function, where $\lambda$ is regularization parameter. (Do not penalize $\theta_0$)

# Notations
- $m$: Number of training samples
- $x$: "input" variables
- $y$: "output" variables
- $(x^{(i)}, y^{(i)})$: i-th sample
- $x^{(i)}_j$: j-th column of i-th sample
- $\theta$: parameters of the model
- $h_\theta(x)$: hypothesis function that takes input to estimate output.
- $J(\theta_0, \theta_1, ...)$: cost function that takes parameters to calculate the accuracy of prediction from hypothesis function.
