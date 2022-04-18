import React from 'react';
import  ScrollReveal  from 'scrollreveal';
import { Container } from './styles';

export function AboutMe(){
    ScrollReveal({reset: true}).reveal('.scroll2', {duration: 1000})
    return(
        <Container id="about">
                <h3>About me</h3>
                <p className='scroll2'>
                    <span>Hii!!</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit magni sint assumenda velit beatae quis repellendus veniam enim quos sed vero iusto eaque tempora quidem, blanditiis, itaque ipsam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, architecto officia sint itaque et nam reiciendis? Dicta culpa illo veritatis. Officia quisquam quia voluptas corrupti illum mollitia amet corporis eaque!
                </p>
        </Container>
    );
}