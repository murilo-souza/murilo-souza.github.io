import React from 'react';
import { Container } from './styles';

export function AboutMe(){
    return(
        <Container id="about">
                <h3>About me</h3>
                <h5><span>Hii,</span> I'm Murilo and I'm going to say few things about myself.</h5>
                <br/>
                <p>
                    I'm currently living in Brazil, I love front-end development and I would like to be one. To improve my skills, I often challenge myself with a random projects on internet or create a project by myself.
                </p>
                <p>
                    I have experience with React Js, React Native and Next Js. I use these technologies because they are so powerful in a front-end environment and has many packages to make development easier
                </p>
                <p>
                    I'm looking for an opportunity to became a front-end developer. So, I invite you to <a href="#meet">meet me</a> on my social networks <a href='https://github.com/murilo-souza'>GitHub</a> and <a href='https://www.linkedin.com/in/murilo-leme-de-souza/'>LinkedIn</a>
                </p>
        </Container>
    );
}