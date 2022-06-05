import styled from "styled-components";
import {AiOutlineInstagram} from 'react-icons/ai'
import theme from "../../../styles/theme/theme";



export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    padding-left: 300px;
    margin-bottom: 100px;;
    @media (max-width:720px){
        padding-left: 0px;
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
            font-size: 40px;
        }

        span {
            color: ${(theme.color.text)};
        }
    }

`;


export const Icon = styled(AiOutlineInstagram)`
    font-size: 70px;
    color: #fff;
`