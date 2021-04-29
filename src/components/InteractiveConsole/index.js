import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { process } from './util'
import React from 'react'
import S, { backgroundColor } from './style'
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

  render = () => {
    const { js, result } = this.state
    return (
      <S.Container>
        <S.Title>Try it out</S.Title>
        <S.Card>
          <S.PartContainer>
            <S.PartTitle>Una</S.PartTitle>
            <S.PartBody>
              <S.CodeInput defaultValue={defaultUnaCode} onChange={this.onChange} />
            </S.PartBody>
          </S.PartContainer>
          <S.PartContainer>
            <S.PartTitle>JavaScript</S.PartTitle>
            <S.PartBody noPadding>
              {js.value ? (
                <SyntaxHighlighter
                  language='javascript'
                  style={atomOneLight}
                  customStyle={{ backgroundColor, flex: 1 }}>
                  {js.value}
                </SyntaxHighlighter>
              ) : (
                js.error
              )}
            </S.PartBody>
          </S.PartContainer>
          <S.PartContainer withoutRightBorder>
            <S.PartTitle>Evaluation</S.PartTitle>
            <S.PartBody>{result.value || result.error}</S.PartBody>
          </S.PartContainer>
        </S.Card>
      </S.Container>
    )
  }
}

export default InteractiveConsole
