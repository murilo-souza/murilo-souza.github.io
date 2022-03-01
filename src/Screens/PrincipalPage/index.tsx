import React from 'react';
import { AboutMe } from '../AboutMe';
import { Home } from '../Home';
import { Navbar } from '../../components/Navbar';
import { Container } from './styles';
import { Skills } from '../Skills';

export function PrincipalPage(){
    return (
        <Container>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Skills/>
        </Container>
    );
}