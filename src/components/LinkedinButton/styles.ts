import styled from "styled-components";
import {BsLinkedin} from 'react-icons/bs'

export const Container = styled.a`
    text-decoration: none;
    height: 50px;
    width: 315px;
    border-radius: 15px;
    border: 0;
    background-color: #0E76A8;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
        margin-right: 10px;
    }

    :hover{
        background-color: #2D88B3;
        transition: all 0.5s;
        
    }

`;

export const Icon = styled(BsLinkedin)`
    color: #fff;
    font-size: 40px;
`