import React from 'react';
import { ButtonNav } from '../ButtonNav';
import { Line } from '../Line';
import { Container } from './styles';
import Logo from '../../assets/Logo.svg'

export function Navbar(){

    function handlePosition(e: any){
        e.preventDefault();
        const target = e.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop
        window.scrollTo({
            left: 0,
            top: location - 106
        })

    }

    return (
        <Container>
            <div>
                <a href="#home" onClick={handlePosition}><img src={Logo}/>Portfolio</a>
                <div>
                    <a href="#home" onClick={handlePosition}>Home</a>
                    <a href="#about" onClick={handlePosition}>About me</a>
                    <a href="#skills" onClick={handlePosition}>Skills</a>
                    <a href="#projects" onClick={handlePosition}>Projects</a>
                    <a href="#meet" onClick={handlePosition}>Meet me</a>
                    <ButtonNav/>
                </div>
            </div>
            <Line/>
        </Container>
    );
}
