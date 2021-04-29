import babelParser from 'prettier/parser-babel'
import prettier from 'prettier'
import una from 'una-language'

const una2JS = code => {
  try {
    const js = una(code)
    const prettyJS = prettier.format(js, { plugins: [babelParser] })
    return { value: prettyJS }
  } catch (error) {
    return { error: error.message }
  }
}

const evalJS = code => {
  try {
    return { value: eval(code) }
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
