import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import clsx from 'clsx'
import { process } from './util'
import React from 'react'
import styles from './styles.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'

const defaultUnaCode = `= fibonacci -> index
  ? (> index 1)
    +
      fibonacci (- index 1) 
      fibonacci (- index 2)
    index

fibonacci 10
`

class InteractiveConsole extends React.PureComponent {
  state = process(defaultUnaCode)

  onChange = event => this.setState(process(event.target.value))

  renderPart = (title, content) => (
    <div className={styles.part}>
      <div className={styles.partTitle}>{title}</div>
      <div className={styles.partInnerContainer}>{content}</div>
    </div>
  )

  render = () => {
    const { js, result } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.title}>Try it out in the interactive REPL console!</div>
        <div className={styles.innerContainer}>
          {this.renderPart(
            'Una',
            <textarea className={styles.codeInput} defaultValue={defaultUnaCode} onChange={this.onChange} />
          )}
          {this.renderPart(
            'JavaScript',
            js.value ? (
              <SyntaxHighlighter
                language='javascript'
                style={atomOneLight}
                customStyle={{ backgroundColor: '#fdfdfd', borderRadius: '4px', flex: 1 }}>
                {js.value}
              </SyntaxHighlighter>
            ) : (
              js.error
            )
          )}
          {this.renderPart('Result', <div className={styles.result}>{result.value || result.error}</div>)}
        </div>
      </div>
    )
  }
}

export default InteractiveConsole
