import react from 'react';
import { Container} from './styles'

interface Props{
    title: string;
    description: string;
    image:string ;
    alt: string;
    link: string;

}

export function CardProject({title, description, image, alt, link}:Props){
    return (
        <Container href={link}>
            <div>
                <div>
                    <img src={image} alt={alt}/>
                </div>
                <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                </div>
            </div>
        </Container>
    );

}