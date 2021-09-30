import React from 'react'
import { InputStyled } from './styled'

export const Input = (props) => {
  const { inputProps } = props
  return (
    <InputStyled {...inputProps} />
  )
}