import styled from "styled-components";
import {SiGmail} from 'react-icons/si'


export const Container = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    padding: 0 163px;
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
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
            color: #fff;
            font-size: 30px;
        }

        span {
            color: #fff;
        }
    }

`;


export const Icon = styled(SiGmail)`
    font-size: 60px;
    color: #fff;
`