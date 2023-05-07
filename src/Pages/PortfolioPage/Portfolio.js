import { React, useEffect } from 'react'

import './Portfolio.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='portfoliopage-maincontainer'>
                <Navbar />
                <Sidebar />
                <h1>portfolio</h1>
            </div>
        </>
    )
}

export default Portfolio