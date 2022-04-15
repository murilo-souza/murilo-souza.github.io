import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
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