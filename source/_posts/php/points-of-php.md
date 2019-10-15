---
layout: post
title: Points of PHP
date: 2016-10-13
category: PHP
tags: 
- points-set
- php
---

## Syntax

### PHP Code
```php
<?php
    ...
?>
```
**Note** All statements end with a semicolon `;`
**Note** Everything except variable names are **NOT** case sensitive.

### Comments

`//` and `#` are used for single-line comment
`/* ... */` can be used for multi-line comment

## Variables

### Usage
`$variable_name = "anything"`

*Note: PHP is a loosely typed language*

### Scope

- local
- global
- static

### Global
`global` keyword can be used to make variable global.
`$GLOBALs['index']` can be used to access global variables.

### Static
Static variable is local. It won't be deleted when function completed.
`static` keyword can be used to make variable static.

## Constant
```php
define("SHI", "Hello world!"[, case_insensitive = false]);
echo SHI;
```

## Data Type

`var_dump($x);` can be used to show the type of a variable.

### String
Variables can be integrated directly into strings:
```php
echo "<h1>$txt</h1>";
```
*Note: `echo` and `print` can be used with or without parentheses*

`.` can be used to concatenate strings.
`.=` to append.

### Array
```php
$a = array(1, 2, 3);
$a[0];

$b = array("a"=>1, "b"=>2, "c"=>3);
$b['a'];
foreach($b as $bi => $bi_value) {
    echo "Key=" . $bi . ", Value=" . $bi_value;
}
```

### Function
```php
function fu($a, $b=0) {
    ...
    return 0
}
```

### Object
```php
class Bi {
    function Bi(){
        $this->shi = "shi";
    }
}

// Create an object
$b = new Bi();

echo $b->shi;
```

## Condition Statement

### If
```php
if() {
    ...
} elseif() {
    ...
} else{
    ...
}
```

### Switch
```php
switch (n) {
    case label1:
        ...
        break;
    ...
    default:
        ...
}
```

## Loops

### While
```php
while() {
    ...
}

do {
    ...
} while();
```

### For
```php
for(...;...;...) {
    ...
}

for ($i as $arr) {
    ...
}
```

## Skills

### Redirection
```php
header("Location: ".$url, true, $permanent ? 301 : 302);
die();
```
