import React from 'react';
import { AboutMe } from '../../components/AboutMe';
import { Home } from '../../components/Home';
import { Navbar } from '../../components/Navbar';
import { Container } from './styles';

export function PrincipalPage(){
    return (
        <Container>
            <Navbar/>
            <Home/>
            <AboutMe/>
        </Container>
    );
}