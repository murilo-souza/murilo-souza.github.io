import React from 'react';
import { Container } from './styles';
import MePhoto from "../../assets/Me.png"

export function Me(){
    return(
        <Container>
            <img src={MePhoto} alt="Minha foto" />
        </Container>

        
    );
}