import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    align-items: center;
    color: #fff;

    h3{
        font-size: 64px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      a{
        margin-right: 30px;
        text-decoration: none;
        font-size: 24px;
        color: #fff;
        :hover{
            color: #505050
        }
      }
      
    }
`;
