import React from 'react'
import AboutContent from '../../Container/AboutContent/AboutContent'
import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className=" text-center section-padding">
                <h1 className='main-title-font'>About Us</h1>
                <hr className='m-auto line-padding' />
            </div>
            <div className="aboutContents">
                <AboutContent header="What is Ecell ?" />
                <AboutContent header="What is VVSF ?" />
            </div>
        </div>

    )
}

export default About
