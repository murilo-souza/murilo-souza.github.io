import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'

export const Container = styled.button`
    height: 40px;
    border-radius: 15px;
    border: 0;
    background-color: #1F2729;
    color: #FFFFFF;
    cursor: pointer;

    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-size: 20px;
        margin-right: 10px;
    }

`;

export const Icon = styled(AiFillGithub)`
    color: #ff0084;
    font-size: 25px;
`