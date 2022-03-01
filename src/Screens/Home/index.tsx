import React from 'react';
import { GithubButton } from '../../components/GithubButton';
import { LinkedinButton } from '../../components/LinkedinButton';
import { Me } from '../../components/Me';

import { Container } from './styles';


export function Home(){
    return (
        <Container>
            <section>
                <span>Hello</span>
                <h3>Welcome to <span>My Portfolio</span></h3>
                <p>Browse the website to see my projects and skills</p>
                <GithubButton/>
                <LinkedinButton/>
            </section>
            <section>
                <Me/>
            </section>
        </Container>
    );
}