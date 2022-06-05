import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'
import theme from "../../styles/theme/theme";

export const Container = styled.a`
    text-decoration: none;
    height: 50px;
    width: 315px;
    border-radius: 15px;
    border: 0;
    background-color: ${(theme.color.secondary)};
    color: ${(theme.color.text)};
    cursor: pointer;
    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width:720px){
        width: 250px;
    }

    p{
        margin-right: 10px;
    }

    :hover{
        background-color: #323030;
        transition: all 0.5s;
    }

`;

export const Icon = styled(AiFillGithub)`
    color: ${(theme.color.primary)};
    font-size: 40px;
`