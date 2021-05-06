import babelParser from 'prettier/parser-babel'
import prettier from 'prettier'
import una from 'una-language'

const prettierOptions = {
  arrowParens: 'avoid',
  parser: 'babel',
  plugins: [babelParser],
  printWidth: 40,
  semi: false,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'none'
}

const una2JS = code => {
  try {
    const js = una(code)
    const prettyJS = prettier.format(js, prettierOptions)
    return { value: prettyJS }
  } catch (error) {
    return { error: error.message }
  }
}

const evalJS = code => {
  try {
    return { value: JSON.stringify(eval(code)) }
  } catch (error) {
    return { error: error.message }
  }
}

export const process = code => {
  const js = una2JS(code)
  if (js.error) return { js, result: { error: 'Error in JS code' } }

  const result = evalJS(js.value)
  return { js, result }
}
