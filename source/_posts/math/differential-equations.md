---
layout: post
title: Differential Equations
date: 2016-10-13
categories: Math
tags: 
- math
- integral
- differential equations
mathjax: true
---

# First order

## Separable
Separate and integrate both sides

## Linear
**Standard form:**

$$\frac{dy}{dx}+p(x)y=q(x)$$

$$r(x)=e^{ \int p(x)}$$

$$\frac{d}{dx}r(x)y=r(x)q(x)$$

# Second order

## Linear Homogeneous
**Standard form:**

$$\frac{d^2}{dx^2}y+a\frac{d}{dx}y+by=0$$

Assume: $y=Ce^{mx}$ ($m$ may be real or complex)

$$C(m^2+am+b)Ce^{mx}=0$$

Since $C\ne0$, and $e^{mx}>0$

$$m^2+am+b=0$$

So the solution:

$$y=Ce^{m_1x}+De^{m_2x}$$

- Two real $m$
- Two complex $m$
- One real $m$

### Two complex $m$

As $m_{1,2}$ is complex numbers, they can be rewritten as

$$m_{1,2}=a\pm ik$$

$$y=e^ax(Ce^{ikx}+De^{-ikx})$$

Using Euler's theorem, 

$$y=e^{ax}(Acos kx+Bsin kx)$$


### One real $m$

$$y=(A+Bx)e^{mx}$$

# Coupled DE

- $$\frac{dx}{dt}=f(x, y, t)$$
- $$\frac{dy}{dt}=g(x, y, t)$$

## Coupled Linear DE with constant coefficients

$$\frac{dx}{dt}=ax+by (1)$$
$$\frac{dy}{dt}=cx+dy (2)$$

Differentiate (1) wrt $t$ (make it second order derivative of $x$ wrt $t$)

Substitute for $\frac{dy}{dt}$ and $y$ (getting rid of $y$)

Solve DE wrt $x$