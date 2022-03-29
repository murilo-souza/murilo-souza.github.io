import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    div{
       background-color: #ff0084;
       height: 70px;
       width: 10px;
       margin: 0 10px 0 5px;
       border-radius: 5px
    }

    a{
        color: #fff;
        font-size: 50px;
        margin-right: 40px;
        text-decoration: none;
    }
`;