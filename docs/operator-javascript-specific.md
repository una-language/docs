---
title: JavaScript specific
slug: /operators/javascript-specific
---

There are a few operators in Una for compatibility with JavaScript

## Class instantiation

Symbol: `new`. <br/>
Translated to JavaScript [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). <br/>
It takes 1+ parameters: the first one is class name and the rest are constructor parameters.. <br/>

```
new Date

new Date ()

new Cat "red"
```

## Type of

Symbol: `typeof`. <br/>
Translated to JavaScript [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).<br/>
It takes 1 parameter.

```
typeof 'Hello'
```

## Instance of

Symbol: `instanceof`. <br/>
Translated to JavaScript [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).<br/>
It takes 2 parameters.

```
instanceof func Function
```
