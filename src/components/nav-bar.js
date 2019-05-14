import React from 'react'

import "../styling/nav-bar.css"

const NavBar = () => 
    <nav className="navbar navbar-dark">
        <h1>VScene</h1>
        <input type="text" placeholder="search..." />
        <ul className="nav-links">
            <li>Profile</li>
            <li>Admin</li>
            <li>Logout</li>
        </ul>
    </nav>

export default NavBar