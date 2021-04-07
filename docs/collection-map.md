---
title: Map
slug: /collection/map
---

Symbol: `:` <br/>
Translated to JavaScript object.
## Construction

Takes key-field pairs as parameters.

Example:
```
= user :
  name 'John'
  age 13
  parents :
    mother :
      name 'Alice'
      age 42
    father :
      name 'Bob'
      age 39
```

You can use already declared names as key-field pair:

```
= name 'John'
= user :
  name
  age 13
```

## Deconstruction

You can put a map to first argument of abstraction operator `=`. In this case it deconstructs the value to it's structure and create named abstractions from its elements.

Example:
```
= user : (name 'John') (age 12)
= (: name) user
console.log name
```

You can rename the field while deconstructing:

```
= user : (name 'John') (age 12)
= (: (name title)) user
console.log title
```

You can deconstruct netsted maps:

```
= user :
  name 'John'
  age 12
  passport :
    id 1
    country 'USA'

= (: (passport (: id))) user
console.log id
```