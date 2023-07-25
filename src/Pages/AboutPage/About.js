import { React, useEffect } from 'react'

import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import MyImage from '../../Assests/profilepicture.jpg'
import Resume from './Resume.pdf'
import Data from '../../DataFile'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='aboutpage-maincontainer'>
            <Navbar />
            <Sidebar />
            <div className='aboutpage-subcontainer'>
                <div className='aboutpage-title-container'>
                    <h1>ABOUT <span className='span-tag'>ME</span></h1>
                    <span className='background-title'>RESUME</span>
                </div>
                <div className='aboutpage-subtitle'>
                    <h3>Personal Info</h3>
                </div>
                <div className='aboutpage-personal-info'>
                    <div className='aboutpage-leftcontainer'>
                        <div className='aboutpage-personal-image'>
                            <img src={MyImage} />
                        </div>
                    </div>
                    <div className='aboutpage-rightcontainer'>
                        <div className='aboutpage-information'>
                            <div>
                                <h4>First Name: <span>Hetvi</span></h4>
                                <h4>Age: <span>19</span></h4>
                                <h4>Freelance: <span>Available</span></h4>
                                <h4>Phone: <span>6353402657</span></h4>
                            </div>
                            <div>
                                <h4>Last Name: <span>Vora</span></h4>
                                <h4>Nationality: <span>Indian</span></h4>
                                <h4>Languages: <span>English, Hindi, Gujarati</span></h4>
                                <h4>Email: <span>hetvivora3007@gmail.com</span></h4>
                            </div>
                        </div>
                        <div className='aboutpage-button-container'>
                            <a href={Resume} target='_blank' download='Hetvi Vora Resume.pdf' >Download CV </a>
                        </div>
                    </div>
                </div>
                <div className='aboutpage-horizontal-line'>
                    <div></div>
                </div>
                <div className='myskill-title'>
                    <h2>MY SKILLS</h2>
                </div>
                <div className='aboutpage-language-container'>
                    {
                        Data.map((item) => {
                            return (
                                <div>
                                    <div className='language-card-container'>
                                        <div className='language-card'>
                                            <h2>{item.language}</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>BASIC MYSQL</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>GITHUB</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>BASIC PYTHON</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>JAVA SCRIPT</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>HTML</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>CSS</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='language-card-container'>
                            <div className='language-card'>
                                <h2>C/C++</h2>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='aboutpage-horizontal-line'>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default About