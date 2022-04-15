import React from 'react';
import { SkillContent } from '../../components/SkillContent';
import { Container } from './styles';
import figma from '../../assets/figma.png'
import { useSkillsAndProjects } from '../../hooks/useSkillsAndProjects';


export function Skills(){
    const {skills} = useSkillsAndProjects()

    return (
        <Container id="skills">
            <h3>Web&Mobile Skills</h3>
            <section>
                <div>
                    {
                        skills.map(skill=>{
                            return (
                                <div key={skill.id}>
                                    <SkillContent
                                        title={skill.title}
                                        image={skill.img}
                                        alt={skill.alt}
                                    />
                                </div>
                            )
                        })
                    }
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