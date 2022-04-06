import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    :hover {
        section{
            height: 87.5px;
            width: 12.5px;
            transition: all 0.3s;
            @media (max-width:720px){
                height:60px;
                width: 7.5px;
            }
        }
        a{
            font-size: 62.5px;
            transition: all 0.3s;
            @media (max-width:720px){
                font-size: 40px;
            }
        }
        
    }

    div{
       background-color: #ff0084;
       height: 50px;
       width: 10px;
       margin: 0 10px 0 5px;
       border-radius: 5px;
    }

    a{
        color: #fff;
        font-size: 50px;
        margin-right: 40px;
        text-decoration: none;
        @media (max-width:720px){
            font-size: 30px;
        }
          
    }
`;