---
title: Conditional
slug: /operators/condtion
---


## Ternary condition

Symbol: `?` <br/>
Usually takes 3 parameters: condition, true branch expression and false branch expression.

```
? true 2 1
```

Example:
```
= value
  ? (> 2 1) "Greater" "Less"
```

If you pass this operator with only 2 parameters the third one is `undefined`:

```
? (== value 0)
  <- (console.log 'Zero!')

? (> value 10)
  <- (console.log "Greater")
  <- (console.log "Less")
```

## Condition with return

Symbol: `?!` <br/>
Takes 2+ parameters: condition and returnable true branch expression.

Returnable conditional operator `?!` is used in sync/async functions and sync/async computations to return value by some condition. 
E.g., the following code in function will return `"One"` if `number` equals `1`:

```
-> (number)
  ?! (== number 1) "One"
  "Two"
```

This operator can have multiline returnable block:

```
?! (== number 1)
  = a 1
  = b 2
  + a b
```

Operator `?!` can't be used as the last or single operator of any block. The folling example shows <b>WRONG</b> usage.

```
= func -> ()
  ?! (> 2 1) 'A'

= value <-
  ?! (> 2 1) 'B'
```
