---
title: Logical
slug: /operators/logic
---

## And

Symbol: `&` <br/>
Translated to JavaScript [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) (`&&`) <br/>
It takes 2+ parameters.

```
= a (& true false)
= b (& true false false)
```

## Or

Symbol: `|` <br/>
Translated to JavaScript [logical OR operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) (`||`) <br/>
It takes 2+ parameters.

```
= a (| true false)
= b (| true false false)
```

## Not

Symbol: `!` <br/>
Translated to JavaScript [logical NOT operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) (`!`) <br/>
It takes 1 parameter.

```
= a (! true)
= b (! false)
= c (! a)
```

Can be written simpler as:
```
= a !b
```