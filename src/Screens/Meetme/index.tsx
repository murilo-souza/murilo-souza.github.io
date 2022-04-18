import React from 'react';
import { MeetMeGroup } from '../../components/MeetMeGroup';
import { Container } from './styles';
import ScrollReveal from 'scrollreveal';


export function MeetMe(){
    return (
        <Container id="meet">
            <h3>Meet me</h3>
            <div>
                <MeetMeGroup/>
            </div>
        </Container>
    );
}