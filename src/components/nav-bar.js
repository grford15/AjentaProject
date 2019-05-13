import React from 'react'

import "../styling/nav-bar.css"

const NavBar = () => 
    <nav className="navbar navbar-dark bg-dark">
        <h1>Title</h1>
        <ul className="nav-links">
            <li>Home</li>
            <li>Other</li>
        </ul>
    </nav>

export default NavBar