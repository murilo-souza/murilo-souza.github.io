import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family:'Raleway', sans-serif;
    }

    html {
        scroll-behavior: smooth
    }

    @media (max-width:1080) {
        html {
            font-size: 93.75%;
        }  
    }

    @media (max-width: 720){
        html {
            font-size: 87.5%;
        }
    }

    body {
        ::-webkit-scrollbar{
            width: 2em;
        }
        ::-webkit-scrollbar-track{
            background: #232121
        }
        ::-webkit-scrollbar-thumb{
            background: #1C1A1A
        }
    }
`
