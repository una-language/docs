---
title: Error
slug: /symmetry/error
---

Symmetry of error throwing and handling.

## Try-catch

Symbol: `|->` <br/>
Translated to JavaScript [try-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

First parameter is catch function. <br/>
Other parameters are try lines. <br/>
Unlike JavaScript `try-catch` operator `|->` in Una always returns some value and it doesn't have `finally` block. <br/>

Example:
```
|->
  <-
    = getName null
    getName ()
  -> error
    console.log error
    'John'
```

If you need to run async code use `<--` instead of `<-` in try or `-->` instead `->` in catch:

```
|->
  <--
    getNameAsync ()
  --> error
    console.log error
    "John"
```

## Throw error

Symbol: `<-|` <br/>
Translated to JavaScript [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

Example:
```
= addOneToNumber -> number
  ?! (isNaN number)
    <-| "number is not valid"
  + number 1
```
