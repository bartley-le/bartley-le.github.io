---
layout: post
title: Evaluating Model
date: 2016-10-27 12:16:00
categories: Machine Learning
tags:
- machine learning
---

## Summary
- High variance(over-fitting)
    + More training samples
    + Less features
    + Increase $\lambda$ / [SVM]Decrease $C$
    + [Neural Network] Less layers, less units
    + [SVM] Increase $\sigma$
- High bias(under-fitting)
    + Get additional features
    + Add polynomial features
    + Decrease $\lambda$ / [SVM]Increase $C$
    + [Neural Network] More layers, more units
    + [SVM] Decrease $\sigma$

## Testing
Testing is used to evaluate how well the model perform.

Split data into `Training` : `Test` = 7:3.

## Cross Validation
Cross validation is used to use different data set to choose the best model and evaluate it. 

1. Split data into `Training` : `Cross Validation` : `Test` = 6:2:2.
2. Use `Cross Validation` set to try on different models.
3. Use `Test` set to evaluate the best model selected by step 2

## Learning Curve
Learning curve is to plot **(training set size, $J\_{training}$)** and **(training set size, $J\_{cv}$)** so that we could know

- High bias: High error on both curves. Curves flat out quickly, and get to same error.
- High variance: High $J\_{cv}$ and low $J\_{training}$, and gap becomes smaller. Indicating more data could help.

## Skewed Classes
When the composition of target $y$ is highly skewed(e.g. 99% of $y$ are the same value), we can get a low error ignoring inputs. So we cannot know whether the model improved or not.

### Precision/Recall

| **Actual True** | **Actual False**
---|---|---
**Predicted True**|True Positive |False Positive
**Predicted False**| False Negative | True Negative
(Note: $y=1$ is the ***rare*** class that we want to detect)
- $Precision=\frac{True Positive}{All Predicted True}$
- $Recall=\frac{True Positive}{All Actual True}$

We can trade off precision($P$) and recall($R$) by setting threshold of decision.

**$F_1$ Score($F$ score)** = $2\frac{PR}{P+R}$