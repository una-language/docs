import styled from 'styled-components'

export const backgroundColor = '#f7f7f7'

const height = 320

export default {
  Card: styled.div`
    align-items: center;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    height: ${height}px;
    margin-bottom: 80px;
    width: 90%;
  `,
  Code: styled.div`
    border-right: ${({ withoutRightBorder }) => (withoutRightBorder ? 0 : 1)}px solid black;
    height: ${height}px;
    padding: 8px;
  `,
  CodeInput: styled.textarea`
    background-color: ${backgroundColor};
    border: none;
    flex: 1;
  `,
  Container: styled.div`
    align-items: center;
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
  `,
  PartContainer: styled.div`
    border-right: ${({ withoutRightBorder }) => (withoutRightBorder ? 0 : 1)}px solid black;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: ${height}px;
  `,
  PartBody: styled.div`
    display: flex;
    flex: 1;
    padding: ${({ noPadding }) => (noPadding ? 0 : 8)}px;
  `,
  PartTitle: styled.div`
    border-bottom: 1px solid black;
    font-weight: bold;
    padding-bottom: 8px;
    padding-top: 8px;
    text-align: center;
  `,
  Title: styled.div`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
  `
}
