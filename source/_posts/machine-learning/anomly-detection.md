---
layout: post
title: Anomaly Detection
date: 2016-11-14 16:27:54
categories: Machine Learning
tags:
- machine learning
mathjax: true
---

We use anomaly detection instead of supervised learning since:
- very small number of positive(anomaly) samples
- anomalies looks differently
So we model negative samples only.

## How it works
- Model probability of occurrence $p(x)$ from data
- Identify anomaly by $p(x)<\epsilon$

## Probability
We assume data are normally distributed
$$p(x)=\prod_{j=1}^np(x_j;\mu_j,\sigma_j^2)$$
($\prod$ is product symbol, return the product of all elements)

Where $\mu_j = \frac{1}{m}\sum_{i=1}^mx_j^{(i)}$, $\sigma^2_j = \frac{1}{m}\sum_{i=1}^m(x_j^{(i)}-\mu_j)^2$

By definition of normal distribution:
$$p(x_j;\mu_j,\sigma_j^2) = \frac{exp(-\frac{(x_j - \mu_j)^2}{2\sigma^2_j})}{\sqrt{2\pi}\sigma_j}$$

### When not normally distributed
We could try transform data by taking $\log(x_i+c)$ or $x^c$

## Training/CV/Test
- Training set: 60% normal data
- CV set: 20% normal data, all anomalous
- Test set: 20% normal data, all anomalous

Notice: As $y$ is highly skewed, we should evaluate it [differently](/2016/10/27/machine-learning/evaluating-model#Skewed-Classes)

## Multivariate normal distribution
We could use multivariate normal distribution to capture correlations between features. Otherwise, we need to manually create features to do so. However, multivariate normal could be computationally expensive.

Also, this **doesn't work** when $\Sigma$ is non-invertible ($m\leq n$ or contains redundant features)

$$p(x;\mu, \Sigma) = \frac{exp(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu))}{(2\pi)^{\frac{n}{2}}|\Sigma|^\frac{1}{2}}$$

Where $\mu=\frac{1}{m}\sum_{i=1}^mx^{(i)}$, $\Sigma=\frac{1}{m}\sum_{i=1}^m(x^{(i)}-\mu)(x^{(i)}-\mu)^T$