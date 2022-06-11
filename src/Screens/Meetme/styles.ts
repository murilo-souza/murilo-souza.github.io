import styled from "styled-components";
import {theme} from "../../styles/theme/theme";

export const Container = styled.div`
    width: 100%;
    height: 95vh;
    background-color: ${(theme.color.background)};
    padding: 100px 0 0 0;
    @media (max-width:720px){
        padding: 100px 0 0 50px;
        height:100%;
    }
    
    h3{
        font-size: 60px;
        color: ${(theme.color.text)};
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        @media (max-width:720px){
            font-size: 50px;
            justify-content: left;
        }

    }


    div {
        display: flex;
        justify-content: center ;
        @media (max-width:720px){
            justify-content:left;
        }
    }

`;