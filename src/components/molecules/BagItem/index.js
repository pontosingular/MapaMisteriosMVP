import React from 'react'
import { AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai'
import Icon from '../../atoms/Icon'
import { colors } from '../../../styles/colors'

import { Container } from './styles'

const typeUi = {
  assombracao: {
    color: 'red',
    icon: 'laursa'
  },
  local: {
    color: 'blue',
    icon: 'casa'
  },
  artefato: {
    color: 'purple',
    icon: 'pote'
  }
}

export default function BagItem ({ title, type, date, findedCount, img }) {
  return (
    <Container color={typeUi[type].color}>
      <div>
        <img src={img} />
      </div>
      <div>
        <h3>
          {title}
        </h3>
        <div>
          { date
            ? <span><AiOutlineCalendar size={13} color={colors[typeUi[type].color]} /> {date}</span>
            : ''
          }
          { findedCount
            ? <span><AiOutlineEye size={13} color={colors[typeUi[type].color]} /> {findedCount} Aparições</span>
            : ''
          }
        </div>
        <Icon type={typeUi[type].icon} size={28} color={colors[typeUi[type].color]} />

      </div>

    </Container>
  )
}
