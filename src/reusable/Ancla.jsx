import React from 'react'
import { BtnMain } from '../styled-componets/Main'

const Ancla = ({href,children,id}) => {
  return (
    <BtnMain href={href} target="_blank" id={id}>{children}</BtnMain>
  )
}

export default Ancla