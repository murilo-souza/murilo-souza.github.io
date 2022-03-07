import React from 'react';
import { ButtonNav } from '../ButtonNav';
import { Line } from '../Line';
import { Container } from './styles';

export function Navbar(){

    function handlePosition(e: any){
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location
        })

    }

    return (
        <Container>
            <div>
                <h3>Portfolio</h3>
                <div>
                    <a href="#home">Home</a>
                    <a href="#about">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#meet">Meet me</a>
                    <ButtonNav/>
                </div>
            </div>
            <Line/>
        </Container>
    );
}