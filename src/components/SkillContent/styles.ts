import styled from "styled-components";
import {theme} from "../../styles/theme/theme";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;


    div{
       background-color: ${(theme.color.primary)};
       height: 50px;
       width: 10px;
       margin: 0 10px 0 5px;
       border-radius: 5px;
    }

    a{
        color: ${(theme.color.text)};
        font-size: 50px;
        margin-right: 40px;
        text-decoration: none;
        @media (max-width:720px){
            font-size: 30px;
        }
          
    }
`;