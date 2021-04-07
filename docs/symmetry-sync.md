---
title: Synchronous
slug: /symmetry/sync
---

Symmetry of synchronous computations.

## Function

Symbol: `->` <br/>
Translated to JavaScript function.

First parameter is function parameters. <br/>
Last parameter is return of the function. <br/>
All parameters between are simple code lines. <br/>

```
= sum -> (x y)
  + x y

= onePlusTwo -> ()
  = one 1
  = two 2
  + one two
```

If you need to return something before last line you can use returnable conditional operator `?!`:

```
= func -> (x y)
  ?! (== x 0) "Nothing"
  = sum (+ x y)
  ? (> sum 5)
    "Great"
    "Not so great"
```

Calling function is just an application of it to parameters:

```
= a (sum 1 2)
= b sum 1 2
= c
  sum 1 2
= d sum
  1
  2
```

To call parameterless function use `()`

```
= randomNumber
  Math.random ()
```

These functions can be used as lambda functions and be passed as a parameter to another function or can be returned as value from another function.

## Immediately invoked functional expression

Symbol: `<-` <br/>
Translated to JavaScript function.

In the following example result is `3`:
```
= result <-
  = a 1
  = b 2
  + a b
```

It's useful when you need to calculate something based on conditions:

```
<-
  ?! (== value 0) "Zero"
  ?! (== value 1) "One"
  ? (< value 10) "Less than ten" "More than ten"
```

You can use this operator with conditional operator `?` to make non returnable code:

```
-> number
  ? (== number 0)
    <-
      console.log "Number is zero!"
      console.log "Hooray!"
  + number 1
```