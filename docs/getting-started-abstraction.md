---
title: Abstraction
---

Operator `=` creates an abstraction of a part of your program under the defined name.

We can declare a name `a` and assign `1` to it:

```
= a 1
```

We can declare a name `b` and assign the result of the application `c` to `d` to it.

```
= b (c d)
```

The transpiler has a special built-in transformation rule for abstraction operator. 
If you pass more than two parameters to it, it first applies the second one on all the following and then assigns the result of the application to the first one.

So you can rewrite the example above as:

```
= b c d
``` 
