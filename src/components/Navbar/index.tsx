import React from 'react';
import { ButtonNav } from '../ButtonNav';
import { Container } from './styles';

export function Navbar(){
    return (
        <Container>
            <h3>Portfolio</h3>
            <div>
                <a href="#">Home</a>
                <a href="#">About me</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <ButtonNav/>
            </div>
        </Container>
    );
}