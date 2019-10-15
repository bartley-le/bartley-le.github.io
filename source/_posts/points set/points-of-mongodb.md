---
layout: post
title: Points of MongoDb
date: 2017-01-22 12:42:53
categories: 
- Points-Set
tags:
- mongodb
- database
- nosql
- points-set
---

## NoSQL database
MongoDb is a NoSQL database which is much more agile and flexible than relational databases.

NoSQL vs SQL:
- Agile and flexible: schema is not required, and easy to change. Which usually cause better performance
- Ability to scale-out (distribute the load among multiple servers)
- To handle large volumes of structured, semi-structured, and unstructured data

Ref: [SQL vs NoSQL: The Differences](https://www.sitepoint.com/sql-vs-nosql-differences/)

## Terminologies
**Document**: MongoDb stores data as [BSON](http://bsonspec.org/) documents
**Collection**: analogous to an SQL table, to store a collection of documents

## CRUD

### Create
SQL
```SQL
INSERT INTO book (
  `ISBN`, `title`, `author`
)
VALUES (
  '9780992461256', 
  'Full Stack JavaScript', 
  'Colin Ihrig & Adam Bretz'
);
```

MongoDb
```javascript
db.book.insert({
  ISBN: "9780992461256",
  title: "Full Stack JavaScript",
  author: "Colin Ihrig & Adam Bretz"
});
```

### Read
SQL
```SQL
SELECT title FROM book
WHERE price > 10;
```

MongoDb
```javascript
db.book.find(
  { price: { &gt;: 10 } },
  { _id: 0, title: 1 }
);
```

### Update
SQL
```SQL
UPDATE book
SET price = 19.99
WHERE ISBN = '9780992461256'
```

MongoDb
```javascript
db.book.update(
  { ISBN: '9780992461256' },
  { $set: { price: 19.99 } }
);
```

### Delete
SQL
```SQL
DELETE FROM book
WHERE publisher_id = 'SP001';
```

MongoDb
```javascript
db.book.remove({
  "publisher.name": "SitePoint"
});
```
