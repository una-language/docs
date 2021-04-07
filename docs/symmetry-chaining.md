---
title: Chaining
slug: /symmetry/chaining
---

Symmetry of chaining.

## Chaining by last parameter

Symbol: `|>` <br/>
Works as transformation rule. <br/>
It takes the result of expression and puts it as the last parameter to the next expression. <br/>

If you want to use such functional programming libraries as `rambda` you will find `|>` operator very useful. <br/>
In the following example `phone` constant equals `'IPHONE'`: 

```
=-> 'ramda' R
= electronics ::
  :
    title ' iPhone '
    type 'phone'

= phones |>
  electronics
  R.find
    R.propEq 'type' 'phone'
  R.prop 'title'
  R.toUpper
  R.trim
```

## Chaining by first parameter

Symbol: `<|` <br/>
Works as transformation rule. <br/>
It takes the result of the expression and puts it as the second parameter to the next expression. <br/>


Because of "Polish notation" application order it's hard to do chains with functions stored in maps. 

Look how ugly it looks: 

```
= sum .reduce
  .filter
    .map (:: 1 2 3) (-> x (+ x 1))
    -> x (> x 2)
  -> (x y) (+ x y)
  0
```

With `<|` it can be rewritten as:

```
= sum <| (:: 1 2 3)
  .map (-> x (+ x 1))
  .filter (-> x (> x 2))
  .reduce (-> (x y) (+ x y)) 0
```