---
title: Essence
slug: /getting-started/essence
---

Una is based on the ideas of [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) created by [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) in the middle of the 20th century. 

It has only two basic operations:

- Application
- Abstraction

Everything else is build upon these two operations.


## Functional programming

Una is a functional language. <br/>
Its syntax is mostly inspired by [LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)). <br/>

The essense of the [functional programming](https://en.wikipedia.org/wiki/Functional_programming) can be represented as a simple pipeline:

```
Data -> Function -> Data
```

Where: 
- Data is immutable
- Function is pure (always returns the same output for the same input)

## JavaScript platform

You should consider that Una is not standalone language. <br/>
The transpiler translates Una code to [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and your code is executed by JavaScript interpretuer. 

- You can run Una on any platform that supports JavaScript
- You can import JavaScript modules to Una
- You can export Una modules to JavaScript
- You can use almost any library from [npm](https://www.npmjs.com)
- You can create React and React Native applications using Una