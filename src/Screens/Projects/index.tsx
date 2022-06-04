import React from "react";
import { Container } from "./styles";
import { CardProject } from "../../components/CardProject";
import DtmoneyBanner from "../../assets/banner/dtmoney.png"
import IgnewsBanner from "../../assets/banner/ignews.png"
import DashgoBanner from "../../assets/banner/dashgo.png"
import PortfolioBanner from "../../assets/banner/portfolio.png"
import GameplayBanner from "../../assets/banner/gameplay.png"

export function Projects(){
     return(
          <Container id="projects">
               <h3>Main projects</h3>
               <div>
                   <CardProject
                    title="DtMoney"
                    description="Created with react js, to learn main funcionaties of react and typescript with react"
                    skill="#React JS"
                    image={DtmoneyBanner}
                    alt="dtmoney"
                    link="https://github.com/murilo-souza/Dtmoney-Web-ReactJS"
                   /> 
                   <CardProject
                    title="Ignews"
                    description="Created to learn how to use next js, understand how to use a database with next js and use api to see how to make an application with a payment service"
                    skill="#Next JS"
                    image={IgnewsBanner}
                    alt="dtmoney"
                    link="https://github.com/murilo-souza/Ignews-Web-ReactJS"
                   /> 
                   <CardProject
                    title="DashGo"
                    description="Created with Next js, to learn main funcionaties of react and typescript with Next js"
                    skill="#Next JS"
                    image={DashgoBanner}
                    alt="dtmoney"
                    link="https://github.com/murilo-souza/DashGo-Web_ReactJS"
                   /> 
                   <CardProject
                    title="Portfolio"
                    description="Project to challenge my knowledge in interface creating in Figma, React JS and using the GitHub deploy system"
                    skill="#React JS"
                    image={PortfolioBanner}
                    alt="dtmoney"
                    link="https://github.com/murilo-souza/murilo-souza.github.io"
                   /> 
                   <CardProject
                    title="Gameplay"
                    description="Application to schedule gameplay with friends, using the discod api to login and a possibility to share an invite with your friends"
                    skill="#React Native"
                    image={GameplayBanner}
                    alt="dtmoney"
                    link="https://github.com/murilo-souza/gameplayNLW-App-ReactNative"
                   /> 
               </div>
          </Container>

     );
}