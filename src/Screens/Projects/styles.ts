import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 87vh;
    background-color: #161414;
    padding: 100px 100px 0 100px;
    @media (max-width:720px){
        padding: 60px 20px 0 50px;
        height: 140vh;
    }

    h3 {
        color: #fff;
        font-size: 60px;
        margin-bottom: 50px;
        @media (max-width:720px){
            font-size:50px;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        @media (max-width:720px){
            flex-direction: column;
        }
    }
`