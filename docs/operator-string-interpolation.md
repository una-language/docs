---
title: String Interpolation
slug: /operators/string-interpolation
---

Symbol: ``` ` ``` <br/>
Translated to JavaScript [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) <br/>
It takes 1+ parameters. <br/>
Each parameter is a string with `${n}` symbols where n is an integer and substitution parameters. <br/>
Substitution parameter can be either value or function.

Example:
```
= name 'John'
= count 5
= fruit 'apples'

= text `
  'Hello, ${0}' name
  'I have ${0} ${1}'
    count
    fruit

console.log text
```

This code will print:

```
Hello, John
I have 5 apples
```

You can also pass the special interpolation function as the first parameter. E.g., usage of `styled.div` from `styled-components`:

```
= Container `
  styled.div
  'background-color: ${0};'
    -> ((: theme)) theme.colors.red
```