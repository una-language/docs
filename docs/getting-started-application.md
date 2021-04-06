---
title: Application
---

Application order is set by parentheses and indentation.

We can apply `a` to `b` in two different ways:

Using parentheses:
```
(a b)
```

Using indentation:
```
a
  b
```

It's not necessary to wrap the first expression on the line in parentheses. So the application can look just like this:
```
a b
```  

## Nested application

Here we apply `a` to the result of application of `b` to `c`.

Using parentheses:

```
a (b c)
```

Using indentation:

```
a
  b c
```

or: 

```
a
  b
    c
```

## Example

All the expressions below are equivalent:

```
a (b (c d)) (e (f g))
```

```
a
  b (c d)
  e (f g)
```

```
a
  b
    c d
  e
    f g
```
```
a
  b
    c
      d
  e
    f
      g
```
```
a
  b
    c
      d
  e (f g)
```
```
a
  b (c d)
  e
    f
      g
```