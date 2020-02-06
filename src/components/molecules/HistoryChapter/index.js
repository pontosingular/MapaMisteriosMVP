import React from 'react'

import armorial from '../../../assets/histories/lorem.svg'

import { Container } from './styles'

export default function HistoryChapter({
  text,
  title,
  isDisplayTitle,
  img,
  isImgCover
}) {
  return (
    <Container>
      <h1>{title}</h1>
      <img src={img} />
      <p>
        {text.split('\n').map(fragment => <p>{fragment}</p>)}
      </p>
    </ Container>
  )
}
