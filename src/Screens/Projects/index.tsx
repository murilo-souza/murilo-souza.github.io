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
                        />
                    <SkillContent
                        image={reactnative}
                        alt="App receitas"
                        title='App Receitas'
                        />
                    <SkillContent
                        image={nextjs}
                        alt="Ignews"
                        title='Ignews'
                        />
                </div>
                <div>
                    <SkillContent
                        image={reactnative}
                        alt="Gameplay NLW"
                        title='Gameplay NLW'
                        />
                    <SkillContent
                        image={nextjs}
                        alt="DashGo"
                        title='DashGo'
                        />
                </div>
        </Container>

    );
}