import React from 'react'

import { Container } from './styles'
import BagItem from '../BagItem'

import histories from '../../../repository'

export default function ItensList () {
  return (
    <Container>
      {
        Object.keys(histories)
          .map(pointId => (
            <BagItem
              key={histories[pointId].id}
              title={histories[pointId].name}
              type={histories[pointId].type}
              date="06 fev de 2020"
              img={histories[pointId].coverImg}
            />
      ))
      }
      </Container>
  )
}

