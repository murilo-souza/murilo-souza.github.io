import React from 'react';
import { ButtonNav } from '../ButtonNav';
import { Line } from '../Line';
import { Container } from './styles';

export function Navbar(){
    return (
        <Container>
            <div>
                <h3>Portfolio</h3>
                <div>
                    <a href="#Home">Home</a>
                    <a href="#About">About me</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <ButtonNav/>
                </div>
            </div>
            <Line/>
        </Container>
    );
}