import React from 'react'
import AboutContent from '../../Container/AboutContent/AboutContent'
import ReverseAboutContent from '../../Container/AboutContent/ReverseAboutContent'
import "./About.css"

const About = () => {
    return (
        <div className="about " id='about'>
            <div className=" text-center section-padding">
                <h1 className='main-title-font'>About Us</h1>
                <hr className='m-auto line-padding' />
            </div>
            <div className="aboutContents">
                <AboutContent header="What is Ecell ?" />
                <ReverseAboutContent header="What is VVSF ?" />
            </div>
        </div>

    )
}

export default About
