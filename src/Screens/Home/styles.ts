import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 175px 120px 0 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #141212;
    section{
        max-width: 500px;
        display: flex;
        flex-direction: column;
        span {
            font-size: 48px;
            color: #ff0084;
        }
        

        h3{
            font-size: 72px;
            color: #fff;
            span {
                font-size: 72px;
            }
        }

        p{
            font-size: 36px;
            color: #fff;

        }

    }
`;