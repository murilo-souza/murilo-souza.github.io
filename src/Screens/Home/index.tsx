import React from 'react';
import { GithubButton } from '../../components/GithubButton';
import { LinkedinButton } from '../../components/LinkedinButton';
import { Me } from '../../components/Me';
import { Container } from './styles';
import ScrollReveal from 'scrollreveal'

export function Home(){
    ScrollReveal({reset: true}).reveal('.scroll', {duration: 1000})
    return (
        <Container id="home">
            <section className='scroll'>
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