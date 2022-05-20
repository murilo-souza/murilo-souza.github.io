import React from 'react';
import { Container } from './styles';

export function AboutMe(){
    return(
        <Container id="about">
                <h3>About me</h3>
                <h5><span>Hii,</span> I'm Murilo and I will say few things about me.</h5>
                <br/>
                <p>
                    I'm currently live in Brazil, I love front-end development and I would like to be one. To improve my skills, I usually challenge myself with a random projects on internet or I create a project by myself.
                </p>
                <p>
                    I have experience with React Js, React Native and Next Js. I use these technologies because they are so powerful in a front-end environment and has many packages to make development easier
                </p>
                <p>
                    I'm searching for an opportunity to became a front-end developer. So, I invite you to <a href="#meet">meet me</a> in my social medias <a href='https://github.com/murilo-souza'>GitHub</a> and <a href='https://www.linkedin.com/in/murilo-leme-de-souza/'>LinkedIn</a>
                </p>
        </Container>
    );
}