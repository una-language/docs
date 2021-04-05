---
title: Installation
slug: /
---

Install transpiler and babel plugin:

```
npm i -D una-language babel-plugin-una-language
```

Add the babel plugin to your `babel.config.js`:

```javascript
{
  plugins: ["una-language"];
}
```

Setup your build tool to support transpiling `.una` files to JavaScript:

## NodeJS

If you use `require` instead of `import` you need to pass `modules: 'require'` property to your plugin configuration in `babel.config.js` like this:

```javascript
{
    plugins: [['una-language', { modules: 'require' }]],
}
```

Add `una` extension to cli properties of `babel` and `babel-node` scripts in `package.json` like this:

```javascript
{
  "scripts": {
      "build": "babel src -d build --extensions .una",
      "start": "babel-node --extensions .una src"
  }
}
```

If you have problems setting it up check out [our Express example](https://github.com/una-language/examples/express)

## React

I assume that you use `create-react-app`.

Add `una` file extension to `moduleFileExtensions` in `config/paths.js` like this:

```javascript
const moduleFileExtensions = [..., 'una']
```

Then add `una` file extension to `babel-loader` in `config/webpack.config.js` like this:

```javascript
{
  test: /\.(js|mjs|jsx|ts|tsx|una)$/;
}
```

If you have problems setting it up check out [our React example](https://github.com/una-language/examples/react)

## React Native

Add `una` file extension to `metro.config.js` like this:

```javascript
module.exports = {
    resolver: {
        sourceExts: [..., 'una']
    }
}
```

If you have problems setting it up check out [our React Native example](https://github.com/una-language/examples/react-native)
