---
layout: post
title: Points of Matlab
date: 2015-10-10
categories: Points-Set
tags: 
- matlab
- points-set
---

## Control Flow
### for loop
```matlab
for x= [initVal:step:endVal or valArray]
    % body
end
```

## Basic Calculation

Inequity **Note, not "!="**

	1 ~= 2  % true

Variable assignment:

	a = 3; % semicolon suppresses output

Displaying them:

```matlab
a = pi
disp(a)
disp(sprintf('2 decimals: %0.2f', a))
disp(sprintf('6 decimals: %0.6f', a))
format long
a
format short
a
```

## Matrix Calculation

### 1. To create a matrix:

```matlab
A = [1 2; 3 4; 5 6]

B = [1 2;
	 3 4;
	 5 6]
```

Or using a built-in function

```matlab
ones(row, col)  % same as C = [2 2 2; 2 2 2]
zeros(row, col)
rand(row, col)  % from a uniform distribution (range [0, 1])
randn(row, col) % from a normal distribution (mean=0, var=1)
eye(row)        % 4x4 identity matrix
```

### 2. Get informations from matrix

```matlab
size(M)    % return a 1x2 matrix: [(number of rows) (number of columns)]
size(M,1)  % number of rows
size(M,2)  % number of cols
length(M)  % size of longest dimension
```

### 3. Manipulating matrix

```matlab
%% indexing
A(3,2)  % indexing is (row,col)
A(2,:)  % ":" means every element along that dimension
A([1 3],:) % print all  the elements of rows 1 and 3

A(:,2) = [10; 11; 12]     % change second column
A = [A, [100; 101; 102]]; % append column vec
A(:) % Select all elements as a column vector.

% Putting data together 
% (A & B are matrics posessing same dims)
C = [A B] or [A,B]        % concatenating A and B matrices side by side
C = [A; B]                % Concatenating A and B top and bottom
```

## Plotting

```matlab
w = -6 + sqrt(10)*(randn(1,10000))  % (mean = -6, var = 10)
hist(w)     % plot histogram using 10 bins (default)
hist(w,50)  % plot histogram using 50 bins
```