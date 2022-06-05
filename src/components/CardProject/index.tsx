import React from 'react';
import { SkillsUsed } from '../SkillsUsed';
import {Container, Card} from './styles'

interface Props{
    title: string;
    description: string;
    image:string ;
    alt: string;
    link?: string;
    skill: string;

}

export function CardProject({title, description, image, alt, link, skill}:Props){
    return (
        <Container  href={link}>
            <Card>
                <div className='banner'>
                    <img src={image} alt={alt}/>
                </div>
                <div className="content">
                    <div className="textContent">
                        <strong>{title}</strong>
                        <p className='description'>{description}</p>
                    </div>
                    <SkillsUsed
                        title={skill}
                    />
                </div>
            </Card>
        </Container>
    );

}