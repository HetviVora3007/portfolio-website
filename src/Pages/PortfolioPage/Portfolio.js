import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Portfolio.css'
import Navbar from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import accessory from '../../Assests/accessory.png'
import weatherapp from '../../Assests/weather.png'
import calculator from '../../Assests/calculator.png'
import todowebapp from '../../Assests/todowebapp.png'
import stopwatch from '../../Assests/stopwatch.png'
import myfirstwebsite from '../../Assests/firstwebsite.png'

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
                    {/* <span className='poetfoliopage-background-title'>WORKS</span> */}
                </div>
                <div className='myportfolio-container'>
                    <Link className='portfolio-link' to='https://hetvi-react-accessory-store.netlify.app/'>
                        <img src={accessory} />
                        {/* <div className='portfolio-name-container'>
                                    <h3>Accessory Store</h3>
                                </div> */}
                    </Link>
                    <Link className='portfolio-link' to='https://hetvivora-weatherapp.netlify.app/'>
                        <img src={weatherapp} />
                        {/* <div className='portfolio-name-container'>
                                    <h3></h3>
                                </div> */}
                    </Link>
                    <Link className='portfolio-link' to='https://hetvi-simplecalculator.netlify.app/'>
                        <img src={calculator} />
                        {/* <div className='portfolio-name-container'>
                                    <h3></h3>
                                </div> */}
                    </Link>
                    <Link className='portfolio-link' to='https://hetvi-todowebapp.netlify.app/'>
                        <img src={todowebapp} />
                        {/* <div className='portfolio-name-container'>
                                    <h3></h3>
                                </div> */}
                    </Link>
                    <Link className='portfolio-link' to='https://hetvi-stopwatch.netlify.app/'>
                        <img src={stopwatch} />
                        {/* <div className='portfolio-name-container'>
                                    <h3></h3>
                                </div> */}
                    </Link>
                    <Link className='portfolio-link' to='https://hetvi-myfirstwebsite.netlify.app/'>
                        <img src={myfirstwebsite} />
                        {/* <div className='portfolio-name-container'>
                                    <h3></h3>
                                </div> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Portfolio