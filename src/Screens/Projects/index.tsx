import React from "react";
import { SkillContent } from "../../components/SkillContent";
import { Container } from "./styles";
import react from '../../assets/React.png'
import reactnative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'

export function Projects(){
    return(
        <Container id="projects">
            <h3>Principle projects</h3>
            <div>
                    <SkillContent
                        image={react}
                        alt="Dtmoney"
                        title='Dtmoney'
                        href='https://github.com/murilo-souza/Dtmoney-Web-ReactJS'
                        />
                    <SkillContent
                        image={reactnative}
                        alt="App receitas"
                        title='App Receitas'
                        href='https://github.com/murilo-souza/Receitas-App-ReactNative'
                        />
                    <SkillContent
                        image={nextjs}
                        alt="Ignews"
                        title='Ignews'
                        href='https://github.com/murilo-souza/Ignews-Web-ReactJS'
                        />
                </div>
                <div>
                    <SkillContent
                        image={reactnative}
                        alt="Gameplay NLW"
                        title='Gameplay NLW'
                        href='https://github.com/murilo-souza/gameplayNLW-App-ReactNative'
                        />
                    <SkillContent
                        image={nextjs}
                        alt="DashGo"
                        title='DashGo'
                        href='https://github.com/murilo-souza/DashGo-Web_ReactJS'
                        />
                </div>
        </Container>

    );
}