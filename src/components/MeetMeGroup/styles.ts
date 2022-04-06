import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    @media (max-width:720px){
        flex-direction: column;
    }
    section{
        @media (max-width:720px){
            display: flex;
            flex-direction: column;
        }
    }
`;