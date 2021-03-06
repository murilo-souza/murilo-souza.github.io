import React from 'react';
import { GithubButton } from '../../components/GithubButton';
import { LinkedinButton } from '../../components/LinkedinButton';
import { Me } from '../../components/Me';
import { Container } from './styles';

export function Home(){
    return (
        <Container id="home">
            <section>
                <span>Hello</span>
                <h3>
                    Welcome to
                    <br/>
                    <span>
                        My Portfolio
                    </span>
                </h3>
                <p>
                    Browse the website<br/>
                    to see my projects<br/>
                    and skills
                </p>
                <GithubButton/>
                <LinkedinButton/>
            </section>
            <section>
                <Me/>
            </section>
        </Container>
    );
}