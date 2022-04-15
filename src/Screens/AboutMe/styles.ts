import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 87.73vh;
    background-color: #161414;
    padding: 100px 90px 0 100px;
    @media (max-width:720px){
        padding: 60px 90px 0 50px;
        height: 60vh; 
    }

    h3 {    
        color: #fff;
        font-weight: normal;
        display: flex;
        justify-content: center;
        font-size: 76px;
        margin-bottom: 58.13px;
        @media (max-width:720px){
            font-size: 50px;
            justify-content: left;
            margin-bottom: 40px;
        }
    }

    p {
        color: #fff;
        font-size: 23px;
        text-align: justify;
        @media (max-width:720px){
            font-size: 20px;
        }
        span{
            color: #ff0084;
            font-size: 30px;
            @media (max-width:720px){
                font-size: 25px;
            }
        }
    }

`; 
