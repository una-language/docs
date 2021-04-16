---
title: Arithmetical
slug: /operators/arithmetics
---

## Addition

Symbol: `+` <br/>
Translated to JavaScript [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) <br/>
It takes 2+ parameters.

```
+ 1 2
+ 1 2 3
```

Also can be used for string concatenation:

```
+ 'Hello, ' 'World!'
```

## Subtraction

Symbol: `-` <br/>
Translated to JavaScript [subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) <br/>

If it has 1 parameter it works as unary `-` and negates the number:

```
- 1
```

If it takes 2+ parameters it works as subtraction

```
- 2 1
- 10 3 2
```

## Multiplication

Symbol: `*` <br/>
Translated to JavaScript [multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) <br/>
It takes 2+ parameters.

```
* 2 2
* 2 3 5
```

## Division

Symbol: `/` <br/>
Translated to JavaScript [division operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division) <br/>
It takes 2+ parameters.

```
/ 4 2
/ 30 3 10
```

## Remainder

Symbol: `%` <br/>
Translated to JavaScript [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) <br/>
It takes 2+ parameters.

```
% 5 2
% 25 7 2
```

## Exponentiation

Symbol: `**` <br/>
Translated to JavaScript [exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) <br/>
It takes 2+ parameters.

```
** 2 2
** 2 3 5
```

## Example

The value of the following expression is `25`:

```
+
  * 2 4
  / 9 3
  + (* 3 2) (/ 4 2)
  *
    + 1 2
    / 6 3
```
