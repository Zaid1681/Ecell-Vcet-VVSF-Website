import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <div className="text-center section-padding">
                <h1 className='main-title-font'>Contact</h1>
                <p>For Collaboration or any queries contact us or reach out to us</p>
                <hr className='m-auto line-padding' />
            </div>
            <div className="contactContent section-padding">
                <div className="contact-row">
                    <div className="colCard">
                            <div className="logo">
                                <FaPhoneAlt />  
                            </div>
                            <h4>Call Us</h4>
                            <p className="card-text">+91 8805787962</p>
                    </div>
                    <div className="colCard">
                            <div className="logo">
                                <FaMapMarkerAlt />  
                            </div>
                            <h4>Address</h4>
                            <p className="card-text">Vidyavardhini College of Engineering and Technology, K.T. Marg, Vasai Road, Vasai-Virar, Maharashtra 401202</p>
                    </div>
                    <div className="colCard">
                            <div className="logo">
                                <FaEnvelope />  
                            </div>
                            <h4>Email</h4>
                            <p className="card-text">ecell@vcet.edu.in</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact 
