import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar-maincontainer'>
                <div className='follow-me-containt'><p>Follow Me</p></div>
                <div className='sidebar-horizontal-line'></div>
                <div className='sidebar-icons'>
                    <Link className='icons' to='https://www.instagram.com/__miss__vora__/'><InstagramIcon /></Link>
                    <Link className='icons' to='https://github.com/HetviVora3007'><GitHubIcon /></Link>
                    <Link className='icons' to='https://www.linkedin.com/in/hetvi-vora-664456235/'><LinkedInIcon /></Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar