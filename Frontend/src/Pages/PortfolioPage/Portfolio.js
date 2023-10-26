import { React, useEffect } from 'react'

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
                                        <h2>{item.project_language.map((items) => {
                                            return (
                                                <div className='Project-languaage'>
                                                    <p>{items}</p>
                                                </div>
                                            )
                                        })}</h2>
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