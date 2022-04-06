import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 112px;
    color: #fff;
    position:fixed;
    top: 0;
    left: 0;
    padding-top:20px;
    background-color: #141212;
    div {
      align-items: center;
      padding: 0 40px 0 50px ;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h3{
          a{
            font-size: 56px;
            text-decoration: none;
            color: #fff;
            @media (max-width:720px){
              font-size: 45px;
            }

            :hover {
              color: #505050;
              transition: all 0.3s;
            }
          }

      }
  
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
  
        a{
          margin-right: 30px;
          text-decoration: none;
          font-size: 22px;
          color: #fff;
          @media (max-width: 1280px) {
                font-size: 20px;
          }
          @media (max-width: 720px) {
                font-size: 20px;
                display:none;

          }

          :hover{
              color: #505050;
              transition: all 0.3s;
          }
        }
      }
    }
`;

