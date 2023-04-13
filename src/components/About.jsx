import React from 'react';
import "../styles/About.css";
import Image from '../assets/avatar-2.svg'

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Quentin Drané, web developer frome Paris, France. I graguated </p>
                        <a href="" className="btn"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
