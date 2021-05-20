---
title: Custom
slug: /operators/custom
---

You can create your own custom operators by passing `customOperators` array to babel plugin config.
Operator signature:

```
{
  match: string | (string => boolean),
  transform: (transform, operator, operands) => [],
  translate: (translate, operator, operands) => string,
}
```

Transform rule transforms the code from AST to AST <br/>
Translate rule translates the code from AST to JavaScript

## Example

```
{
  plugins: [
    [
      'una-language',
      {
        customOperators: [
         {
           match: '+++',
           transform: (transform, operator, operands) => [operator, transform(operands[1]), transform(operands[0])],
           translate: (translate, operator, operands) => `${translate(operands[0])} + ${translate(operands[1])}`
         }
        ]
      }
    ]
  ]
}
```

Every time you use this operator in your code like this:

```
console.log (+++ 1 2)
```

Before translating to JavaScript it first transforms to:

```
console.log (+++ 2 1)
```

And translates to JavaScript as:

```
console.log(2 + 1)
```
