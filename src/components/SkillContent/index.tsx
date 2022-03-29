import React from "react";
import { Container } from "./styles";

interface Props {
    image:string ;
    alt: string;
    title: string;
    link?: string;
}

export function SkillContent({image, alt, title, link}: Props){
    return(
        <Container href={link}>
            <img src={image} alt={alt}/>
            <div/>
            <p>{title}</p>
        </Container>
    );
}