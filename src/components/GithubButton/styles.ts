import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'

export const Container = styled.a`
    text-decoration: none;
    height: 50px;
    width: 315px;
    border-radius: 15px;
    border: 0;
    background-color: #1F2729;
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
        background-color: #323030;
    }

`;

export const Icon = styled(AiFillGithub)`
    color: #ff0084;
    font-size: 40px;
`