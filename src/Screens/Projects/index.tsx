import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
import react from '../../assets/React.png'
import reactNative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'
import { CardProject } from "../../components/CardProject";


export function Projects(){
     return(
          <Container id="projects">
               <h3>Main projects</h3>
               <div>
                   <CardProject/> 
               </div>
          </Container>

     );
}