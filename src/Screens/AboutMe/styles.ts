import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #161414;
    padding: 100px 90px 20px 100px;
    @media (max-width:720px){
        padding: 60px 90px 0 50px;
        height: 100%; 
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
    h5 {
        font-size: 40px;
        color: #fff;
        @media (max-width:720px){
            font-size: 20px;
        }
        span{
            color: #ff0084;
            font-size: 45px;
            @media (max-width:720px){
                font-size: 25px;
            }
        }
    }
    p {
        color: #fff;
        font-size: 35px;
        text-align: justify;
        padding-bottom: 30px;
        a{
            color: #ff0084;
            text-decoration: none;
            font-weight: bold;
        }
        @media (max-width:720px){
            font-size: 20px;
        }
    }

`; 
