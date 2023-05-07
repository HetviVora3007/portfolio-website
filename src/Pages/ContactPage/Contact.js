import { React, useEffect } from 'react'

import './Contact.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='contactpage-maincontainer'>
                <Navbar />
                <Sidebar />
                <h1>Contact</h1>
            </div>
        </>
    )
}

export default Contact