import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const CustomSvg = styled(ReactSVG)`
  svg {
    display: inline-block;
    width: ${({ width }) => width ? `${width}px !important` : 'inherit'};
    height: ${({ height }) => height ? `${height}px !important` : 'inherit'};
    rect {
      fill: ${({ color }) => color} !important;
    }
    path {
      fill: ${({ color }) => color} !important;
    }
  }
`
