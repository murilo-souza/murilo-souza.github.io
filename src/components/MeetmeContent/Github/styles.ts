import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'


export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    
    margin-bottom: 110px;
    div {
        height: 70px;
        width: 70px;
        background-color:#FF0084;
        margin-right: 15px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        display: flex;
        :hover{
            width: 105px;
            height: 105px;
        }
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
            color: #fff;
            font-size: 40px;
        }

    }

`;


export const Icon = styled(AiFillGithub)`
    font-size: 70px;
    color: #fff;
    :hover{
        font-size 105px;
    }
`