---
title: Nullish
slug: /operators/nullish
---

## Nullish coalesing

Symbol: `??`. <br/>
Translated to JavaScript [nullish coalesing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator). <br/>
Takes 2+ parameters.

```
?? null 2
```

## Default parameters

Symbol: `..`. <br/>
Takes 2 parameters.

```
.. a 1
```

The following example prints `2`:

```
= add -> ((.. x 1)) (+ x 1)
= result (add ())
console.log(result)
```

The following example prints `1`:

```
= object (: (b 2))
= (: (.. a 1)) object
console.log a
```
