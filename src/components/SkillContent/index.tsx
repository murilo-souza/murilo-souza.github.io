import React from "react";
import { Container } from "./styles";

interface Props {
    image:string ;
    alt: string;
    title: string;
}

export function SkillContent({image, alt, title}: Props){
    return(
        <Container>
            <img src={image} alt={alt}/>
            <div/>
            <p>{title}</p>
        </Container>
    );
}