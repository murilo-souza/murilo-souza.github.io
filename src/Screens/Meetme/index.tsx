import React from 'react';
import { Github } from '../../components/MeetmeContent/Github';
import { Gmail } from '../../components/MeetmeContent/Gmail';
import { Instagram } from '../../components/MeetmeContent/Instagram';
import { Linkedin } from '../../components/MeetmeContent/Linkedin';
import { MeetMeGroup } from '../../components/MeetMeGroup';
import { Container } from './styles';

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