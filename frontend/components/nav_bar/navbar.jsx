import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ currentUserId, logout }) => {

    const showMenu = () => {
        document.getElementById("settings").classList.toggle("show-menu")
    }

    return (
        <div>
            <nav className="header-logout">
                <NavLink to="/home" className="icon">
                    <i id="logo" className="fab fa-pinterest"></i>
                </NavLink>
                <div className="home-button">
                    <Link to="/home">Home</Link>
                </div>
                <div className="search-bar">Peridot!</div>
                <a className="icon" id="linked-in" href="https://www.linkedin.com/in/erick-santos2/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className="icon" id="github" href="https://github.com/Arctive" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <NavLink to={`/users/${currentUserId}/pins`} className="icon profile">
                    <i className="fas fa-user"></i>
                </NavLink>
                <div className="options">
                    <div className="icon" onClick={showMenu}><i className="drop-down fas fa-chevron-down"></i></div>
                    <ul id="settings" className="drop-down-menu">
                        <li onClick={logout}>Log out</li>
                    </ul>
                </div>
            </nav>
            <div className="nav-space"></div>
        </div>
    )
}

export default NavBar;