import React from 'react';
import { AboutMe } from '../AboutMe';
import { Home } from '../Home';
import { Container } from './styles';
import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { MeetMe } from '../Meetme';

export function PrincipalPage(){
    return (
        <Container>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <MeetMe/>
        </Container>
    );
}