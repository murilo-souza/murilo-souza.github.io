import React from 'react';
import { SkillContent } from '../../components/SkillContent';
import { Container } from './styles';
import react from '../../assets/React.png'
import reactnative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'
import typescript from '../../assets/Typescript.png'
import html from '../../assets/Html.png'
import css from '../../assets/CSS3.png'
import figma from '../../assets/figma.png'
import { useSkillsAndProjects } from '../../hooks/useSkillsAndProjects';


export function Skills(){
    //const {skills} = useSkillsAndProjects()

    return (
        <Container id="skills">
            <h3>Web&Mobile Skills</h3>
            <section>
                <div>
                    <SkillContent
                        image={react}
                        alt="React"
                        title='React'
                        />
                    <SkillContent
                        image={reactnative}
                        alt="React Native"
                        title='React Native'
                        />
                    <SkillContent
                        image={nextjs}
                        alt="Next JS"
                        title='Next JS'
                        />
                </div>
                <div>
                    <SkillContent
                        image={typescript}
                        alt="Typescript"
                        title='Typescript'
                        />
                    <SkillContent
                        image={html}
                        alt="Html"
                        title='Html'
                        />
                    <SkillContent
                        image={css}
                        alt="Css"
                        title='Css'
                        />
                </div>
            </section>
            <h3>UX/UI Design Skills</h3>
            <div>
                <SkillContent
                    image={figma}
                    alt="Figma"
                    title='Figma'
                />
            </div>
        </Container>
    );
}