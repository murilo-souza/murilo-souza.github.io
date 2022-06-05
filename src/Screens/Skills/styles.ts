import styled from "styled-components";
import theme from "../../styles/theme/theme";

export const Container = styled.div`
    background-color: ${(theme.color.background)};
    width: 100%;
    height:100vh;
    padding: 71px 90px 0 100px;
    @media (max-width:720px){
        padding: 71px 20px 0 50px;
        height: 100%;
    }
    h3 {
        font-size: 60px;
        color: ${(theme.color.text)};
        margin-bottom: 25px;
        @media (max-width:720px){
            font-size: 50px;
        }
    }

    section {
        margin-bottom: 35px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        @media (max-width:720px){
            flex-direction: column;
        }
    }
`;