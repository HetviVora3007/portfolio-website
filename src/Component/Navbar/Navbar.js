import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import './Navbar.css'

const Navbar = () => {

    const [movileUiLink, setMobileUiLink] = useState(false)

    return (
        <>
            <div className='navbar-maincontainer'>
                <div className='navbar-leftside-container'>
                    <p>Het<span className='span-tag'>vi Vora</span></p>
                </div>
                <div className={movileUiLink ? 'mobile-nav-link' : 'navbar-rightside-container'} onClick={() => setMobileUiLink(movileUiLink)}>
                    <NavLink exact activeClassName='activeLink' className='navbar-links' to='/'>Home</NavLink>
                    <NavLink exact activeClassName='activeLink' className='navbar-links' to='/aboutpage'>About</NavLink>
                    <NavLink exact activeClassName='activeLink' className='navbar-links' to='/portfoliopage'>Portfolio</NavLink>
                    <NavLink exact activeClassName='activeLink' className='navbar-links' to='/contactpage'>Contact</NavLink>
                </div>
                <button className='menu-icon' onClick={() => setMobileUiLink(!movileUiLink)} >
                    {movileUiLink ? <ClearIcon /> : <MenuIcon />}
                </button>
            </div>
        </>
    )
}

export default Navbar