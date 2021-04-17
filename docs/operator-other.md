---
title: Other
slug: /operators/other
---

There are a few operators in Una for compatibility with JavaScript

## Class instantiation

Symbol: `new`.
Translated to JavaScript [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). <br/>
It takes 1+ parameters. <br/>
First parameter is the class name, the rest are constructor parameters.

Example:

```
new Date

new Date ()

new Cat "red"
```

## Typeof

Symbol: `typeof`. <br/>
Translated to JavaScript [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).<br/>
It takes 1 parameter.

Example:

```
typeof 'Hello'
```
