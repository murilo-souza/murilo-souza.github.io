import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'
import {theme} from "../../styles/theme/theme";

export const Container = styled.a`
    text-decoration: none;
    height: 40px;
    border-radius: 15px;
    border: 0;
    background-color: ${(theme.color.secondary)} ;
    cursor: pointer;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;



    p{
        color: ${(theme.color.text)};
        font-size: 17px;
        margin-right: 10px;
    }
    :hover{
        background-color: #323030;
        transition: all 0.5s;
    }
`;

export const Icon = styled(AiFillGithub)`
    color: ${(theme.color.primary)};
    font-size: 25px;
`