---
title: Field Operator
slug: /collection/field
---

Symbol: `.` <br/>

## Field or element getting

Gets a field from map or an element from list.

Example:

```
= list :: 1 2 3
= map : (a 1) (b 2)

console.log (. list 0)
console.log (. map 'a')
```

## Dynamic field key

Set dynamic key for a map field. 
Translated to JavaScript as `{[key]:value}`. 

Example:
```
= key 'name'
= value 'John'
= object :
  . key value
```

## Function calls

If you want to call a function that is stored as field in the map you don't need to the following:
```
= numbers :: 1 2 3
= incrementedNumbers
  (. numbers 'map') (-> x (+ x 1))
```

You can just do this:
```
= numbers :: 1 2 3
= incrementedNumbers
  .map numbers (-> x (+ x 1))
```

or even this:

```
= numbers :: 1 2 3
= incrementedNumbers
  numbers.map (-> x (+ x 1))
```

