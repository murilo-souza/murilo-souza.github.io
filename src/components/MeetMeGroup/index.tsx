import React from 'react';
import { Container } from './styles';
import {Github} from '../MeetmeContent/Github'
import {Gmail} from '../MeetmeContent/Gmail'
import {Intagram} from '../MeetmeContent/Instagram'
import {Linkedin} from '../MeetmeContent/Linkedin'


export function MeetMeGroup(){
    return(
        <Container>
            <section>
                <Github/>
                <Linkedin/>
            </section>
            <section>
                <Gmail/>
                <Intagram/>
            </section>
        </Container>
    )
}