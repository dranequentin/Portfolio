import React from 'react';
import "../styles/About.css";
import Image from '../assets/roundedavatar.png'
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am Quentin Drané, web developer from Paris, France. I have some experience in web site building and customization, also I am good at C# </p>
                        <a href="#about" className="btn">Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">HTML/CSS</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage htmlcss"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">PHP</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage php"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">REACT</h3>
                                <span className="skills__number">50%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__title">
                                <h3 className="skills__name">C#</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage csharpe"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About
