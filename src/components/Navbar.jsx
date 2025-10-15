import React from "react"
import './Navbar.css';
import notification from '../assets/notification.png';
import profile from '../assets/profile.png';
import degree from '../assets/degree.png';

function Nav() {
    return (
        <>
            <div className='navbar'>
                <div className='nav-left'>
                    <img src={degree} alt="GradLink Logo" />
                    <span>GradLink</span>
                </div>
                <div className='nav-right'>
                    <img src={notification} alt="Notifications" />
                    <img src={profile} alt="Profile" />
                    <h4>Profile</h4>
                </div>
            </div>
        </>
    )
}

export default Nav;