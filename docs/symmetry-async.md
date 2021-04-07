---
title: Asynchronous
slug: /symmetry/async
---

Symmetry of asynchronous computations.

## Async function

Symbol: `-->` <br/>
Translated to JavaScript [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)


```
= getUserPosts --> user
  database.loadPosts user.postIds
```

## Await

Symbol: `<--` <br/>
Translated to JavaScript [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

```
= checkIfUserIsAdmin --> userId
  = user <-- (database.loadUserAsync userId)
  == user.role 'admin'
```

You can have multiple lines of code in this operator:

```
= value <--
  = a 1
  = (: b) <-- (getAsync a)
  b
```