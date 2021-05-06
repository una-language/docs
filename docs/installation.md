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

In case of problems check out [our Express example](https://github.com/una-language/example-express)

## React

I assume that you use `create-react-app`.

You need to use `react-app-rewired` with `customize-cra` to make Una work 

Install the tools: 
```
npm install --save-dev react-app-rewired customize-cra
```

Add the file `config-overrides.js` with the following content:
```
const { getBabelLoader } = require("customize-cra");

module.exports = {
    webpack:  config => {
        const babel = getBabelLoader(config)
        babel.options.plugins.push('una-language')
        babel.test =  /\.(js|mjs|jsx|ts|tsx|una)$/
        return config
    },
    paths: (config) => {
        config.moduleFileExtensions = [...config.moduleFileExtensions, 'una']
        return config
    }
}
```

In case of problems check out [our React example](https://github.com/una-language/example-react)

## React Native

Add `una` file extension to `metro.config.js` like this:

```javascript
module.exports = {
    resolver: {
        sourceExts: [...defaultConfig.resolver.sourceExts, 'una']
    }
}
```

In case of problems check out [our React Native example](https://github.com/una-language/example-react-native)
