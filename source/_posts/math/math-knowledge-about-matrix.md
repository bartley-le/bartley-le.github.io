---
layout: post
title: Math knowledge about Matrix
date: 2015-10-10
categories: Math
tags:
- math
- matrix
mathjax: true
---
## Basic

$$
\begin{bmatrix}
a & b \\\\
c & d \\\\
e & f
\end{bmatrix}
$$

A matrix has 3 rows and 2 columns, so it is a 3x2 matrix.

- $A_{ij}$ refers to the element in the $i$th row and $j$th column of matrix A
- $v_i$ refers to the element in the $i$th row of the vector.
- In general, all our vectors and matrices will be 1-indexed.
- Matrices are usually denoted by uppercase names while vectors are lowercase.
- "Scalar" means that an object is a single value, not a vector or matrix.
- $\mathbb{R}$ refers to the set of scalar real numbers.
- $\mathbb{R}^n$ refers to the set of n-dimensioned vectors of real numbers

## Addition
**Matrix dimensions must agree**
Plussing is just add each coordinate numbers together.(Minus as well)

$$
\begin{bmatrix}
a & b \\\\
c & d \\\\
\end{bmatrix} +
\begin{bmatrix}
  w & x \\\\
  y & z \\\\
\end{bmatrix} =
\begin{bmatrix}
  a+w & b+x \\\\
  c+y & d+z \\\\
\end{bmatrix}
$$

## Multiplication

### Matrix * number
Plussing is just add each coordinate numbers together.(Minus as well)



$$
\begin{bmatrix}
a & b \\\\
c & d
\end{bmatrix} * x =
\begin{bmatrix}
ax & bx \\\\
cx & dx
\end{bmatrix}
$$



### Matrix * vector

$
\begin{bmatrix}
a & b \\
c & d \\
e & f
\end{bmatrix}*
\begin{bmatrix}
x\\
y
\end{bmatrix} =
\begin{bmatrix}
ax + by\\\\
cx + dy\\\\
ex + fy
\end{bmatrix}
$

$
([m*n]*[n*1] = [m*1])
$

### Matrix * matrix

$$
\begin{bmatrix}
  a & b \\\\ 
  c & d \newline 
  e & f
 \end{bmatrix} \*
\begin{bmatrix}
  w & x \newline 
  y & z \newline 
 \end{bmatrix} =
\begin{bmatrix}
  aw + by & ax + bz \newline 
  cw + dy & cx + dz \newline 
  ew + fy & ex + fz
 \end{bmatrix}
 $$

 $$
([m\*n] \* [n\*o] = [m\*o])
$$

### **Warnings**
Two properties of matrix multiple:

- Not commutative. $A\*B \neq B\*A$
- Associative. $(A\*B)\*C = A\*(B\*C)$

## Inverse & transpose


### Inverse
The inverse of a matrix $A$ is denoted $A^{-1}$. Multiplying by the inverse results in the identity matrix.
A non square matrix does not have an inverse matrix. We can compute inverses of matrices in octave with the pinv(A) function.

**Invertibility:** 


### Transpose

$$
A = 
 \begin{bmatrix}
  a & b \newline 
  c & d \newline 
  e & f
 \end{bmatrix} 
$$

$$
A^T = 
 \begin{bmatrix}
  a & c & e \newline 
  b & d & f \newline 
 \end{bmatrix}
$$

In other words:

$A_{ij} = A^T_{ji}$