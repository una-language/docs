---
title: Translate rules
slug: /macro/translate
---

Signature: `(translate: AST => string, operator: string, operands: [AST]) => string` <br/>

Parameters:

<ul>
    <li><b>translate</b> - function that translates AST to JavaScript</li>
    <li><b>operator</b> - operator sign</li>
    <li><b>operands</b> - operands of operator</li>
</ul>

Allows you to create your own custom operator <br/>
To do it add custom translate rules to babel plugin options like this:

```
{
  plugins: [
    [
      'una-language',
      {
        customTranslateRules: {
          '+++': (translate, operator, operands) => `${translate(operands[0])} + ${translate(operands[1])}`
        }
      }
    ]
  ]
}
```

After it in your code you use this operator:

```
console.log (+++ 1 2)
```

It translates to:

```
console.log(1 + 2)
```

<b>Note: </b> translate rule also allows you to override default operators behaviour but it's not recommended
