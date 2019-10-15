---
layout: post
title: Introduction to Entity Relationship Diagram
date: 2016-10-17
category: Database
tags: 
- database
- erd
- entity relationship diagram
---

# Introduction
ERD was first proposed by Peter Chen in 1976

# Components

## Entities
Entity Type is represented capitalised using a rectangular box.

## Attributes
Attributes is represented using ellipse.

### Primary Key
Represented by underlining the name of the attribute.

### Multi-valued Attribute
Represented using concentric ellipses

### Derived Attribute
Represented using a dashed ellipse

## Relationships
Relationship is represented using a diamond

### Cardinality
Cardinality describes how many entities are related in each side.

Can be:
- One-to-One
- One-to-Many
- Many-to-Many

![ERD Cardinality Diagram](/img/erd_cardinality.png)


### Participation

**Participation Constraint** is presented by min:max indicating number of times an entity can participate in a relationship.

- Total
  All entities should participate in at lease one relationship.
- Partial

## Other Entities

### Associative Entity
Entity used to associate many to many relationship wile storing other attributes.

Represented as both entity and relationship - diamond in a rectangle.

### Weak Entity
Weak entity is an entity depend on another entity.

Represented using double rectangle.

