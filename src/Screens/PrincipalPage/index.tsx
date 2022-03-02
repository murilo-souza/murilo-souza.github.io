import React from 'react';
import { AboutMe } from '../AboutMe';
import { Home } from '../Home';
import { Navbar } from '../../components/Navbar';
import { Container } from './styles';
import { Skills } from '../Skills';
import { Projects } from '../Projects';
import { Contact } from '../Contact';

export function PrincipalPage(){
    return (
        <Container>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
        </Container>
    );
}