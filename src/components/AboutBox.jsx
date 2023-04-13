import React from 'react'

const  AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">16</h3>
                    <span className="about__subtitle">Project completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Intership</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
