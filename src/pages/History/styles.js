import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  align-items: center;
  height: 3em;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  color: ${colors.paragraph};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  h1 {
    color: ${colors.primary};
    font-weight: lighter;
  }
`

export const Msg = styled.div`
  border-bottom: 2px solid #2CB67D;
  color: #2A2A2A;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  e {
    color: #2CB67D;
    margin-top: 8px;
    margin-bottom: 8px;
    font-family: 'ABeeZee';
    font-size: 2em;
  }
  button {
    background-color: none;
    border: none;
    color: #FF8E3C;
  }
`
