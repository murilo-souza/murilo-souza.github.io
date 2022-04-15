import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
import react from '../../assets/React.png'
import reactnative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'
import { useSkillsAndProjects } from '../../hooks/useSkillsAndProjects';

export function Projects(){
    const {projects} = useSkillsAndProjects()
    return(
        <Container id="projects">
            <h3>Main projects</h3>
            <div>
               {
                   projects.map(project =>{
                       return (
                           <div key={project.id}>
                               <SkillContent
                                title={project.title}
                                image={project.img}
                                alt={project.alt}
                               />
                           </div>
                           
                       )
                   })
               }
            </div>
    
        </Container>

    );
}