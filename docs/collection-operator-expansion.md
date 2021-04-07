---
title: Expansion Operator
slug: /collection-operator/expansion
---

Symbol: `...`
Expansion operator `...` works just like in JavaScript for construction and deconstruction of lists and maps.

Example:
```
= threeNumbers :: 1 2 3
= fiveNumbers :: ...threeNumbers 45
= (:: one ...restNumbers) fiveNumbers

= userFields :
  name 'John'
  age 13

= user :
  id 1
  gender 'm'
  isAlive true
  ...userFields

= (: isAlive ...rest) user
console.log rest
```