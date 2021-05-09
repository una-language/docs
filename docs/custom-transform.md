---
title: Transform rules
slug: /custom/transform
---

Signature: `(transform: AST => AST, operator: string, operands: [AST]) => AST` <br/>

Parameters:

<ul>
    <li><b>transform</b> - function that transforms AST to AST</li>
    <li><b>operator</b> - operator sign</li>
    <li><b>operands</b> - operands of operator</li>
</ul>

Sometimes you need to change default behaviour of application for custom operator.
To do it add custom transform rules to babel plugin options like this:

```
{
  plugins: [
    [
      'una-language',
      {
        customTransformRules: {
          '+++': (transform, operator, operands) => [operator, operands[1], operands[0]]
        },
        customTranslateRules: {
          '+++': (translate, operator, operands) => `${translate(operands[0])} + ${translate(operands[1])}`
        }
      }
    ]
  ]
}
```

After it every time you use this operator in your code like this:

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

<b>Note:</b> transform rule also allows you to override default operators behaviour but it's not recommended
