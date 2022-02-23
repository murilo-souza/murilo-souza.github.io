import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family:'Raleway', sans-serif;
    }

    @media (max-width:1080) {
        html {
            font-size: 93.75%
        }  
    }

    @media (max-width: 720){
        html {
            font-size: 87.5%
        }
    }
`