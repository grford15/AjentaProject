import React from 'react'
import home from '../public/assets/home-btn.png';
import schedule from '../public/assets/schedule-btn.png';

import "../styling/side-nav-bar.css"

const SideNavBar = () =>

    <div id="side-bar">
        <div className="links">
            <a href="/">Home</a>
            {/* <img src={home} alt="home button" /> */}
        </div>
        <div className="links">
            <a href="/schedule">Schedule</a>
            {/* <img src={schedule} alt="schedule button" /> */}
        </div>
    </div>

export default SideNavBar