import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'
import {theme} from "../../../styles/theme/theme";


export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    
    margin-bottom: 110px;
    @media (max-width:720px){
        margin-bottom: 70px;
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
        }

    }
    div {
        height: 70px;
        width: 70px;
        background-color:${(theme.color.primary)};
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
            font-size: 40px;
        }

    }

`;


export const Icon = styled(AiFillGithub)`
    font-size: 70px;
    color: ${(theme.color.text)};
    display: flex;
    align-items: center;
    justify-content: center;
`