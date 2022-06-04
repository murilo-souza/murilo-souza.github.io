import React from 'react';
import { SkillContent } from '../../components/SkillContent';
import { Container } from './styles';
import figma from '../../assets/skills/figma.png'
import react from '../../assets/skills/React.png'
import reactNative from '../../assets/skills/ReactNative.png'
import nextjs from '../../assets/skills/nextjs.png'
import typescript from '../../assets/skills/Typescript.png'
import html from '../../assets/skills/Html.png'
import css from '../../assets/skills/CSS3.png'

export function Skills(){
    return (
        <Container id="skills">
            <section>
                <h3>Web&Mobile Skills</h3>
                <section>
                    <div>
                        <SkillContent
                            title='React'
                            image={react}
                            alt="Rea"
                            />
                        <SkillContent
                            title='React Native'
                            image={reactNative}
                            alt="React Native"
                            />
                        <SkillContent
                            title='Next JS'
                            image={nextjs}
                            alt="Next JS"
                            />
                        <SkillContent
                            title='Typescript'
                            image={typescript}
                            alt="Typescript"
                            />
                        <SkillContent
                            title='Html'
                            image={html}
                            alt="Html"
                            />
                        <SkillContent
                            title='Css'
                            image={css}
                            alt="Css"
                        />

                    </div>
                </section>
                <h3>UX/UI Design Skills</h3>
                <div className='scroll3'>
                    <SkillContent
                        image={figma}
                        alt="Figma"
                        title='Figma'
                        />
                </div>
            </section>
        </Container>
    );
}