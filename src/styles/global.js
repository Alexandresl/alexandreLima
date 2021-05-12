import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 868px) {
    body.disabledScroll {
      overflow: hidden;
    }
  }
`

export default GlobalStyle;