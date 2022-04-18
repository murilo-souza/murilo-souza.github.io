import React from 'react';
import { SkillContent } from '../../components/SkillContent';
import { Container } from './styles';
import figma from '../../assets/figma.png'
import react from '../../assets/React.png'
import reactNative from '../../assets/ReactNative.png'
import nextjs from '../../assets/nextjs.png'
import typescript from '../../assets/Typescript.png'
import html from '../../assets/Html.png'
import css from '../../assets/CSS3.png'

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