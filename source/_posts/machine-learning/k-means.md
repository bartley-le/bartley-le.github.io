---
layout: post
title: K-Means
date: 2016-11-13 9:35:15
categories: Machine Learning
tags: 
- machine learning
- clustering
- k-means
---

K-Means algorithm is an unsupervised clustering algorithm.

## How it works
- Randomly initialize $K$ clustering centroids $\mu_k$
- Optimize centroids until converge
    + Assign training data $x^{(i)}$ to closest centroid $c^{(i)}$
    + Set centroid to the mean of assigned data

## Cost function
$J=\sum{||x^{(i)}-\mu_{c^{(i)}}||^2}$

## Debugging

### Random initialization
Initialize centroid by picking points from training data.
K-means cost function may converge to a bad local optimum, we could try several random initializations to find the global optimum.

### Choosing $K$ value
We could try plotting the cost and $K$ value. If there is an elbow, it could be a good $K$ value. If no, we should determine $K$ by data and our purpose.