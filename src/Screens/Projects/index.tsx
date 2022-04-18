import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
import react from '../../assets/React.png'
import reactNative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'
import ScrollReveal from 'scrollreveal'


export function Projects(){
     ScrollReveal({reset: true}).reveal('.scroll4', {duration: 1000})
     return(
          <Container id="projects">
               <h3>Main projects</h3>
               <div className="scroll4">
                    <SkillContent
                         title="Ignews"
                         image={nextjs}
                         alt="Ignews"
                    />
                    <SkillContent
                         title="DashGo"
                         image={nextjs}
                         alt="DashGo"
                    />
                    <SkillContent
                         title="Dtmoney"
                         image={react}
                         alt="Dtmoney"
                    />
                    <SkillContent
                         title="App Receitas"
                         image={reactNative}
                         alt="App Receitas"
                    />
                    <SkillContent
                         title="Gameplay NLW"
                         image={reactNative}
                         alt="Gameplay NLW"
                    />
               </div>
     
          </Container>

     );
}