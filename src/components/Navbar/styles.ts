import styled from "styled-components";
import theme from "../../styles/theme/theme";

export const Container = styled.nav`
    width: 100%;
    height: 112px;
    color: ${(theme.color.text)};
    position: relative;
    top: 0;
    left: 0;
    padding-top:20px;
    background-color:${(theme.color.background)};
    
    
    @media (max-width:720px){
      height: 100px;
    }
    div {
      align-items: center;
      padding: 0 40px 0 100px ;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width:720px){
        padding: 0 40px 0 50px ;
      }

    
      a{
        display: flex;
        text-decoration: none;
        color: ${(theme.color.text)};
        font-size: 50px;
        align-items: center;
        @media (max-width:720px){
          font-size: 45px;
        }
        img{
          width: 65px;
          height: 65px;
          @media (max-width:720px){
            width:55px;
            height:55px;
          }
        }
        :hover {
          color: #505050;
          transition: all 0.3s;
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
          color: ${(theme.color.text)};
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

