---
title: React and React Native
slug: /misc/react
---

Una doesn't support JSX. <br/>
Instead of JSX you can use React.createElement, where first parameter is component, second parameter is props and the rest of parameters are children.


Example:
```
=-> 'react' React

= (: (createElement e)) React

= Component -> ((: count name))
  e div (: (style (: backgroundColor 'red')))
    e div : count
    e div : name
```

Another example using [styled-components](https://github.com/styled-components/styled-components) and React hooks:
```
=-> './index.css'
=-> 'react' React
=-> 'react-dom' ReactDOM
=-> './styles' S

= (: (createElement e)) React

= App -> ((: name))
  = (:: count setCount) (React.useState 0)
  e S.Container :
    e S.Hello (: (color 'green')) 'Hello, '
    e S.Name : name
    e S.IncrementCount
      : (onClick (-> () (setCount (+ count 1))))
      'Press me'
    e S.Count : count

ReactDOM.render
  e App (: (name 'John'))
  document.getElementById 'root'
```

For better understanding you can check out [React example](https://github.com/una-language/example-react) and [React Native example](https://github.com/una-language/example-react-native)