import styled from 'styled-components'

import { colors } from '../../../styles/colors'

export const Mask = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
`

export const Container = styled.div`
  justify-content: space-between;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;

  height: 264px;
  border-radius: 15px  15px 0 0;
  width: 100%;
  padding: 16px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
  
  h3 {
    font-size: 20px;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    flex-direction: row;
    color: ${colors.paragraph}
    div > div {
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }
  }

  main .avatar {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    margin-right: 8px;
  }

  header {
    text-align: center;
  }

  footer {
    align-self: flex-end;
    width: 100%;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${({ available }) => available ? colors.secondary : colors.greyText};
  font-size: 20px;
  color: white;
  border:  none;
  border-radius: 5px;

`
