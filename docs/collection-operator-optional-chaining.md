---
title: Optional Chaining Operator
slug: /collection/optional-chaining
---

Symbol: `?.` <br/>
Translated to JavaScript [optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). <br/>

## Optional field getting

You can get `b` field from `a` map in two ways:

```
?. a 'b'
```

or:

```
a?.b
```

## Optional field getting by dynamic key

```
= a : (key 2)
= b 'key'
?. a b
```

## Function calls

```
?.b a
```

equals to:

```
?. a b
```

You can call function `b` if it exists in map `a` with parameter `1` with such syntax:

```
?.b a 1
```
