import { React, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import TypewriterComponent from 'typewriter-effect';

import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import profileimg from '../../Assests/profilepicture.jpg'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='homepage-maincontainer'>
                <Navbar />
                <Sidebar />
                <div className='homepage-subcontainer'>
                    <div className='homepage-leftside-container'>
                        <div className='leftside-containt'>
                            <h1 className='homepage-name-title'>I'M <span className='span-tag'>Hetvi Vora</span></h1>
                            <p className='homepage-sub-title'>
                                <span className='span-tag'>A</span>
                                <TypewriterComponent
                                    onInit={(typewriter) => {
                                        typewriter.typeString('')
                                            .pauseFor(550)
                                            .deleteAll()
                                            .typeString('Web Developer')
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString('Front End Developer')
                                            .pauseFor(250)
                                            .start();
                                    }} /></p>
                            <p className='homepage-about-containt'>
                                I enjoy taking complex problems and turning them into simple and beautiful interface websites. I also love the logic and structure of coding and always solve to write elegant and efficient code.
                            </p>
                            <Link to='/about' className='aboutpage-link'>MORE ABOUT ME</Link>
                        </div>
                    </div>
                    <div className='homepage-rightside-container'>
                        <div className='rightside-containt'>
                            <div className='circle'></div>
                            <div className='circle-2'></div>
                            <div className='circle-3'></div>
                            <div className='flotting'></div>
                            <img src={profileimg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home