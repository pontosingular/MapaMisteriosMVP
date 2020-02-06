import styled from 'styled-components'
import { colors } from '../../../styles/colors'

import { Link } from 'react-router-dom'

export const Container = styled.nav`
  width: 100%;
  height: 75px;
  background-color: ${colors.white};
  border-radius: 15px 15px 0 0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  padding-bottom: 8px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const NavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  color: ${({ active }) => active ? colors.primary : colors.greyText};
  transition: all 0.3s ease;

  span {
    font-weight: 600;
    font-size: 14px;
  }

  & + a {
    margin-left: 36px;
  }
`
