import React from 'react'
import { AiOutlineCompass, AiOutlineUser } from 'react-icons/ai'

import Icon from '../../atoms/Icon'
import { colors } from '../../../styles/colors'

import { Container, NavItem } from './styles'

export default function TabMenu ({ inventario, explorar, perfil, }) {
  return (
    <Container>
      <NavItem active={inventario} to='/inventario'>
        <Icon
          type="bolsa"
          size="24"
          color={ inventario ? colors.primary : colors.greyText }
        />
        <span>Inventário</span>
      </NavItem>
      <NavItem
        active={explorar}
        to='/'
      >
        <AiOutlineCompass
          size="28"
          color={ explorar ? colors.primary : colors.greyText }
        />
        <span>Explorar</span>
      </NavItem>
      <NavItem active={perfil} to='/perfil'>
        <AiOutlineUser
          size="28"
          color={ perfil ? colors.primary : colors.greyText }
        />
        <span>Perfil</span>
      </NavItem>
    </Container>
  )
}
