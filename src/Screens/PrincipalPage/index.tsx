import React from 'react';
import { Home } from '../../components/Home';
import { Navbar } from '../../components/Navbar';
import { Container } from './styles';

export function PrincipalPage(){
    return (
        <Container>
            <Navbar/>
            <Home/>
        </Container>
    );
}