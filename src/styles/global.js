import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css?family=ABeeZee&display=swap');
  @import "react-alice-carousel/lib/alice-carousel.css";

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.background};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    @media screen and (min-width: 1200px) {
      width: 1200px;
      margin:auto;
    }
  }

  body, input, button {
    font: 14px 'Nunito Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
