---
title: Arithmetical
slug: /operators/arithmetics
---

## Addition 

Symbol: `+` <br/>
Translated to JavaScript [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) <br/>
It takes 2+ parameters.

```
= a (+ 1 2)
= b (+ 1 2 3)
```

Also can be used for string concatenation:
```
= c (+ "Hello, "World!")
```

## Subtraction

Symbol: `-` <br/>
Translated to JavaScript [subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction) <br/>

If it has 1 parameter it works as unary `-` and negates the number:
```
= a (- 1)
```

If it takes 2+ parameters it works as subtraction
```
= a (- 2 1)
= b (- 10 3 2)
```

## Multiplication

Symbol: `*` <br/>
Translated to JavaScript [multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) <br/>
It takes 2+ parameters.

```
= a (* 2 2)
= b (* 2 3 5)
```

## Division

Symbol: `/` <br/>
Translated to JavaScript [division operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division) <br/>
It takes 2+ parameters.

```
= a (/ 4 2)
= b (/ 30 3 10)
```

## Remainder

Symbol: `%` <br/>
Translated to JavaScript [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) <br/>
It takes 2+ parameters.

```
= a (% 5 2)
= a (% 25 7 2)
```

## Example

The value of `a` in the following expression is `25`:

```
= a +
  * 2 4
  / 9 3
  + (* 3 2) (/ 4 2)
  *
    + 1 2
    / 6 3
```
