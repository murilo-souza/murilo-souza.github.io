import styled from "styled-components";
import {theme} from "../../styles/theme/theme";


export const Container = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 300px;
    margin-right: 40px;
    margin-bottom: 40px;
    :hover{
        width: 400px;
        transition: all 0.5s;
    }

`;

export const Card = styled.div`
    justify-content: center;
    .banner{
        position: absolute;
        height:164px;
        width:286px;
        border: 1px solid ${(theme.color.primary)};
        border-radius: 12px;
        box-sizing: border-box;
        margin-bottom: 130px;

        img{
            height:100%;
            width:100%;
            object-fit: contain;
            border-radius: 10px;
        }
    }

    .content {
        border: 1px solid ${(theme.color.primary)};
        flex-direction: column;
        color: ${(theme.color.textAternative)};
        flex-wrap: wrap;
        background-color: ${(theme.color.text)};
        border-radius: 10px;
        padding: 100px 0px 0px 0px;
        margin-top: 80px;
        @media (max-width:720px){
            
        }
        .textContent {
            padding: 0px 10px 10px 10px;

        }
        strong {
            font-size: 15px;
            margin-bottom: 5px;
        }
        .description {
            font-size: 12px;
            margin-bottom: 15px;
        }
        
    }
`;