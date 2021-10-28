import React from 'react';
import appLogo from '../assets/images/app-logo.png'
import '../styles/components/Topbar.css';

const Topbar = () => {
    return (
        <div className='top-bar'>
            <div className='top-bar-logo'>
                <img
                    src={appLogo}
                    height='40'
                    alt='app-logo'
                />
            </div>
            <div className='top-bar-login'>
                <span className='text-underline'>Login</span>{"|"}<span className='text-underline'>Sign up</span>
            </div>
        </div>
    )
}

export default Topbar;