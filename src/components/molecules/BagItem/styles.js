import styled from 'styled-components'

import { colors } from '../../../styles/colors'

export const Container = styled.li`
  width: 100%;
  border-radius: 15px;
  background-color: ${colors.white};
  margin: none;
  padding: none;
  min-height: 120px;
  display: flex;
  flex-direction: row;
  padding: 16px;

  & + li {
    margin-top: 16px;
  }
  div:nth-of-type(1) {
    flex-grow: 0;
    width: 68px;
    img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid ${({ color }) => colors[color]};
    }
  }
  div:nth-of-type(2) {
    margin-left: 10px;
    flex-shrink: 0;
    flex-grow: 1;
    h3 {
      font-weight: bold;
      font-size: 20px;
      color: ${colors.paragraph};
      margin: 0;
      padding: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      span {
        font-size: 12px;
        margin-right: 18px;
        display: inline-block;
      }
    }
    svg:last-child {
      align-self: flex-end;
    }
  }

`
