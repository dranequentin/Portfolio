import React, { useState } from 'react'
import "../styles/Projects.css";
import Menu from './Menu';

const Projects = () => {
    const [items, setItems] = useState(Menu)
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })
        setItems(updatedItems);
    }
    return (
        <section className="work container section" id="work">
            <h2 className="section__title">Recent Works</h2>
            <div className="work__filters">
            <span className="work__item" onClick={() =>setItems(Menu)}>Everything</span>
            <span className="work__item" onClick={() =>filterItem("C#")}>C#</span>
            <span className="work__item" onClick={() =>filterItem("HTML/CSS/PHP")}>HTML/CSS/PHP</span>
            <span className="work__item" onClick={() =>filterItem("REACT")}>React.js</span>
            <span className="work__item" onClick={() =>filterItem("JAVA")}>Java</span>
            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const{id,image,title,category,link} = elem;
                    return(
                        <div className="work__card" key ={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__image" />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
