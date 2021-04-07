---
title: Module
slug: /symmetry/module
---

Symmetry of module importing and exporting. <br/>
Una modules are fully compatiable with JavaScript. You can import JavaScript modules to Una and you can import Una modules to JavaScript.

## Import

Symbol: `-->` <br/>
Translated to JavaScript `require` or `import`. 
First parameter is path.
The second parameter is imported object.

If you pass `modules: 'require'` to babel plugin options it works as `require`. <br/>
If you pass `modules: 'import'` or pass nothing to babel plugin options it works as `import`.

You can import module:
```
=-> 'react' React
```

You can deconstruct the imported module
```
=-> 'react' (: createElement)
```

You just import the module without taking anything from it:
```
=-> './index.css'
```

You can import default from module and other fields:
```
=-> 'react' React (: createElement)
```

## Export

Symbol: `-->` <br/>
Translated to JavaScript `module.exports` or `export` or `export default`. 

If you pass `modules: 'require'` to babel plugin options it works as `modules.export =`. <br/>
If you pass `modules: 'import'` or pass nothing to babel plugin options it works as `export` or `export default`.

### Default module export:

```
<-= a
```

Translates to:
```
export default a
```

or:

```
module.exports = a
```

### Constant export:

```
<-= = a 1
```

Translates to:
```
export const a = 1
```

or:

```
module.exports.a = 1
```

### Multiple constants export:

```
<-= ()
  a
  b
  c
  d
```

Translates to:
```
export {a, b, c, d}
```