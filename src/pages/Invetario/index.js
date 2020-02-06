import React from 'react'

import MainTemplate from '../../components/templates/MainTemplate'
import List from '../../components/molecules/ItensList'

import { Container } from './styles'

export default function Invetario () {
  return (
    <MainTemplate current='inventario' >
      <Container>
        <h1>O registro das suas aventuras</h1>
        <List />
      </Container>
    </ MainTemplate>
  )
}
