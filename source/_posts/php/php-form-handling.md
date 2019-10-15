---
layout: post
title: PHP Form Handling
date: 2016-10-12
categories: PHP
tags: 
- php
- form handling
---

## Get Form Data

```php
$_GET["field"]
$_POST["field"]
```

## Validation

### Not empty
```php
if (empty($_POST["field"])) {
  $err = "Field is required";
}
```

### Letters and white space only

```php
if (!preg_match("/^[a-zA-Z ]*$/",$field)) {
  $err = "Only letters and white space allowed"; 
}
```

### E-mail address
```php
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $err = "Invalid email format"; 
}
```

### Url
```php
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$url)) {
  $err = "Invalid URL"; 
}
```
