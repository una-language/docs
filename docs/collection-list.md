---
title: List
slug: /collection/list
---

Symbol: `::` <br/>
Translated to JavaScript array.

## Construction

Example:

```
= numbers :: 1 2 3
```

Maps and lists can be nested to each self:

```
= users ::
  : (name 'Alice') (age 32)
  : (name 'Bob') (age 25)

= user :
  name 'Chris'
  posts ::
    : (title 'Post 1') (likes 30)
    : (title 'Post 2') (likes 44)
    : (title 'Post 3') (likes 2)
```

You can use already declared names as elements of list:

```
= a 1
= numbers :: a 2 3
```

## Deconstruction

You can put a list to first argument of abstraction operator `=`. In this case it deconstructs the value to it's structure and create named abstractions from its fields.

Example:

```
= numbers :: 1 2 3
= (:: one two three) numbers
console.log one
```
