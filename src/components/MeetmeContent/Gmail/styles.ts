import styled from "styled-components";
import {SiGmail} from 'react-icons/si'
import {theme} from "../../../styles/theme/theme";


export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    padding-left: 300px;
    margin-bottom: 110px;
    @media (max-width:720px){
        padding-left:0px;
        margin-bottom: 70px
    }

    :hover{
        div{
            width: 87.5px;
            height: 87.5px;
            transition: all 0.3s;
        }
        section{
            p{
                font-size: 50px;
                transition: all 0.3s;
            }
            span{
                font-size: 20px;
                transition: all 0.3s;
            }
        }
    }

    div {
        height: 70px;
        width: 70px;
        background-color: ${(theme.color.primary)};
        margin-right: 15px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
            color: ${(theme.color.text)};
            font-size: 30px;
        }

        span {
            color: ${(theme.color.text)};
        }
    }

`;


export const Icon = styled(SiGmail)`
    font-size: 60px;
    color: #fff;
`