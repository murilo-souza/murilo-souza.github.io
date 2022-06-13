import styled from "styled-components";
import {theme} from "../../styles/theme/theme";

export const Container = styled.div`
    width: 100%;
    background-color: #161414;
    padding: 100px 100px 0 100px;
    @media (max-width:720px){
        padding: 0px;
        height: 100%;
    }

    h3 {
        color: ${(theme.color.text)};
        font-size: 60px;
        margin-bottom: 50px;
        margin-left: 50px;
        @media (max-width:720px){
            font-size:50px;
        }
    }

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        @media (max-width:720px){
            align-items: center;
            flex-wrap: nowrap;
            flex-direction: column;
        }
    }
`