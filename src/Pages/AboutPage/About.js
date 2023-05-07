import { React, useEffect } from 'react'

import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='aboutpage-maincontainer'>
                <Navbar />
                <Sidebar />
                <h1>About</h1>
            </div>
        </>
    )
}

export default About