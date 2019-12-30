---
layout: post
title: Neural network
date: 2016-10-22 13:55:31
categories: 
- Machine Learning
- Neural Network
tags:
- machine learning
- classification
- neural network
mathjax: true
---

Neuron network is about mimicking the brain. Our brain can learn anything with one algorithm ("one learning algorithm" hypothesis, re-wiring test).

## How our brain works
A neuron takes inputs from other neurons or sensors, process and provide outputs to other neurons. The way we learn is to change the weight of each input for output.

## Neuron Model: Logistic Unit
For each neuron, with input of $x$, output would be $h_\theta(x)=sigmoid(\theta^Tx)$. Here, $sigmoid()$ is the activation function(whether this neuron output a big value).


# Artificial Neural Network

## Activation Function (Hypothesis Function)
To justify, activation function is not hypothesis function since there should be only one hypothesis function. Activation function of the output layer is the hypothesis function.

Vectorized:
$$
a^{(i)}=sigmoid(\Theta^{(i-1)}*a^{(i-1)})
$$

Remember to add biased unit $a^{(i)}_0=1$

## Cost Function
Cost function of neural network is just summing up cost function of logistic regression for each output unit.
For the regularization part, just sum up all the parameters except for the bias units.

## Optimization
### Forward-propagation
Execute activation function (and adding bias unit) for each layer.

### Back-propagation
Back-propagation is to calculate how much to 
For output layer units:
$$
\delta^{(L)}=a^{(L)}-y
$$

For hidden layer units:
$$
\delta^{(l)}=\Theta^T\delta^{(l+1)}.*a'(z^{(l)})
$$

where $a'=a^{(i)}.*(1-a^{(i)})$


## Multiclass classification
- One-vs-all: Output layer $L$ has n units each represent a class

## Random Initialization
To make each neuron unit get different features, we should initialize the $\Theta$ randomly (in $[-\epsilon, \epsilon]$).
A good choice of $\epsilon$ is $\epsilon=\frac{\sqrt{6}}{\sqrt{L_{in}+L_{out}}}$

# Notations
- $a^{(i)}_j$: "activation"(output) of unit $j$ in layer $i$
- $\Theta^{(j)}$: matrix storing all parameters (weights) that the neurons in layer $j+1$ uses to get output.
- $L$: No. of layers
- $s_l$: No. of units(not include bias unit) in layer $l$
- $s_L, K$: No. of units in output layer
