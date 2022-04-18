import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px 120px 0 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #141212;
    @media (max-width:720px){
        padding: 30px 120px 0 50px;
        flex-direction: column;
        justify-content: center;
        height: 100%;
       
    }
    
    section{
        display: flex;
        flex-direction: column;
        
        span {
            font-size: 48px;
            color: #ff0084;
            @media (max-width:720px){
                font-size: 38px;
            }
        }
        

        h3{
            font-size: 72px;
            color: #fff;
            @media (max-width:720px){
                font-size: 62px;
            }
            span {
                font-size: 72px;
                @media (max-width:720px){
                    font-size: 62px;
                }
            }
        }

        p{
            font-size: 36px;
            color: #fff;
            @media (max-width:720px){
                font-size: 26px;
            }

        }

    }
`;