import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
import react from '../../assets/React.png'
import reactNative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'


export function Projects(){
     return(
          <Container id="projects">
               <h3>Main projects</h3>
               <div>
                    <SkillContent
                         title="Ignews"
                         image={nextjs}
                         alt="Ignews"
                         link="https://github.com/murilo-souza/Ignews-Web-ReactJS"
                    />
                    <SkillContent
                         title="DashGo"
                         image={nextjs}
                         alt="DashGo"
                         link="https://github.com/murilo-souza/DashGo-Web_ReactJS"
                    />
                    <SkillContent
                         title="Dtmoney"
                         image={react}
                         alt="Dtmoney"
                         link="https://github.com/murilo-souza/Dtmoney-Web-ReactJS"
                    />
                    <SkillContent
                         title="App Receitas"
                         image={reactNative}
                         alt="App Receitas"
                         link="https://github.com/murilo-souza/Receitas-App-ReactNative"
                    />
                    <SkillContent
                         title="Gameplay NLW"
                         image={reactNative}
                         alt="Gameplay NLW"
                         link="https://github.com/murilo-souza/gameplayNLW-App-ReactNative"
                    />
               </div>
     
          </Container>

     );
}