import React from 'react'
import { TextInput } from 'react-native'
import { InputStyled } from './styled'

export const Input = (props) => {
  const {inputProps } = props
  return (
    <InputStyled {...inputProps} />
  )
}