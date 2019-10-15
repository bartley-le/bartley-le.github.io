---
layout: post
title: Points of SQL
date: 2016-10-11
category: Points-Set
tags: 
- points-set
- database
- sql
---

## Schema Operations
### Constraint
- **NOT NULL**
- **UNIQUE**
- **PRIMARY KEY**
- **FOREIGN KEY**
- **CHECK** - Ensures that the value in a column meets a specific condition
- **DEFAULT** - Specifies a default value for a column

### Create
```
CREATE DATABASE dbname
```
```
CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size),
....
);
```

### Alter

```
ALTER TABLE table_name
ADD column_name datatype
ALTER COLUMN column_name datatype
DROP COLUMN column_name
```

## Create

## Read

### WHERE

### GROUP BY
Provide filters for aggregate function, make aggregate function work for some keys instead of the whole table.
```
SELECT column_name, aggregate_function(column_name)
FROM table_name
GROUP BY column_name;
```

### HAVING

### ORDER BY

### Aggregate Functions

## Update

## Delete

## Joining Tables

### INNER JOIN
Join only on common values
```
SELECT *
FROM table1 INNER JOIN table2
    ON table1.pk = table2.fk
```