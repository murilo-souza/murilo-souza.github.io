import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100px;
    color: #fff;
    position:fixed;
    top: 0;
    left: 0;
    padding-top:20px;
    div {
      align-items: center;
      padding: 0 80px 0 108px ;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
              color: #505050;
          }
        }
      }
    }
`;

