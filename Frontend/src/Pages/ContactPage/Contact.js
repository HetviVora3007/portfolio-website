import { React, useEffect, useState } from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Contact.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Contact = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(props.portfolioData)
    }, [])

    const [formData, setFormData] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const submitHandler = (formData) => {
        props.createHandler(formData)
        console.log(formData)
    }

    return (
        <div className='contactpage-maincontainer'>
            <Navbar />
            <Sidebar />
            <div className='contact-container'>
                <div className='contact-subcontainer'>
                    <div className="contactpage-left-container">
                        <div className='contact-left-subcontainer'>
                            <div className="contact-title">
                                <h1>Get In <span className='span-tag'>Touch</span></h1>
                            </div>
                            <div><p className='about-contact'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p></div>

                            <div className="contact-information">
                                <div className='mail-container'>
                                    <div><CallIcon /></div>
                                    <div>
                                        <p>MAIL ME</p>
                                        <h4>hetvivora3007@gmail.com</h4>
                                    </div>
                                </div>
                                <div className='phonenumber-container'>
                                    <div><EmailIcon /></div>
                                    <div>
                                        <p>CALL ME</p>
                                        <h4>6353402657</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="contactpage-icons">
                                <a className='contact-icons' href='https://www.instagram.com/__miss__vora__/'><InstagramIcon /></a>
                                <a className='contact-icons' href='https://github.com/HetviVora3007'><GitHubIcon /></a>
                                <a className='contact-icons' href='https://www.linkedin.com/in/hetvi-vora-664456235/'><LinkedInIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className="contactpage-rightside-container">
                        <div className='contact-right-subcontainer'>
                            <div className="contact-rightside-title">
                                <h1>Contact <span className='span-tag'>Me</span></h1>
                            </div>
                            <div className="contactpage-inputs">
                                <div>
                                    <p>Name</p>
                                    <input type='text' name='Name' onChange={inputHandler} />
                                </div>
                                <div>
                                    <p>Email</p>
                                    <input type='email' name='Email' onChange={inputHandler} />
                                </div>
                                <div>
                                    <p>Phone Number</p>
                                    <input type='number' name='PhoneNumber' onChange={inputHandler} />
                                </div>
                            </div>
                            <div className="submit-button">
                                <button onClick={() => submitHandler(formData)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact