import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background-color: ${(props) => props.theme['zinc-800']};
        color: ${(props) => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }

`
