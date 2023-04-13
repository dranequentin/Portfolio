import React from 'react';
import "../styles/Home.css";
import Me from "../assets/roundedavata-2.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Quentin Drané</h1>
                <span className="home__education">I'm a developer
                </span>
            <HeaderSocials />
            <a href="#contact" className="btn">Contact Me</a>
            <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home
