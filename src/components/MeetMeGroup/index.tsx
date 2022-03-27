import React from 'react';
import { Container } from './styles';
import {Github} from '../MeetmeContent/Github'
import {Gmail} from '../MeetmeContent/Gmail'
import {Linkedin} from '../MeetmeContent/Linkedin'
import {Instagram} from '../MeetmeContent/Instagram'

export function MeetMeGroup(){
    return(
        <Container>
            <section>
                <Github/>
                <Linkedin/>
            </section>
            <section>
                <Gmail/>
                <Instagram/>
            </section>
        </Container>
    )
}