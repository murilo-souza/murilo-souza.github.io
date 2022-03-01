import React from 'react';
import { Me } from '../Me';

import { Container } from './styles';


export function Home(){
    return (
        <Container>
            <section>
                <span>Hello</span>
                <h3>Welcome to <span>My Portfolio</span></h3>
                <p>Browse the website to see my projects and skills</p>
            </section>
            <section>
                <Me/>
            </section>
        </Container>
    );
}