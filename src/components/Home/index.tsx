import React from 'react';
import { Photo } from '../Photo';

import { Container } from './styles';


export function Home(){
    return (
        <Container>
            <section>
                <span>Hello</span>
                <h3>Welcome to <span>My Portfolio</span></h3>
                <p>Browse the website to see my projects and skills</p>
            </section>
            <Photo/>
            
        </Container>
    );
}