import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Portfolio.css'
import Data from '../../DataFile'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='portfoliopage-maincontainer'>
            <Navbar />
            <Sidebar />
            <div className='contactpage-subcontainer'>
                <div className='portfoliopage-title-container'>
                    <h1><span className='span-tag'>MY </span>PORTFOLIO</h1>
                    <span className="background-title">WORKS</span>
                </div>
                <div className='myportfolio-container'>
                    {
                        Data.map((item) => {
                            return (
                                <a className='portfolio-link' href={item.link}>
                                    <img className='card-image' src={item.image} />
                                    <div className='card-name-container'>
                                        <h1>{item.Name}</h1>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio