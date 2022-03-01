import React from 'react';
import { Container } from './styles';
import Me from "../../assets/Me.png"

export function Photo(){
    return(
        <Container>
            <img src={Me} alt="My photo" />
        </Container>
    );
}