import React from 'react'

import "../styling/side-nav-bar.css"

const SideNavBar = () =>

    <div id="side-bar">
        <div className="links">
            <a href="/">Home</a>
        </div>
        <div className="links">
            <a href="/schedule">Schedule</a>
        </div>
    </div>

export default SideNavBar