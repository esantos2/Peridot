import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ currentUserId, logout }) => {

    const showMenu = () => {
        document.getElementById("settings").classList.toggle("show-menu")
    }

    return (
        <nav className="header-logout">
            <div className="icon">
                <Link to="/home"><i id="logo" className="fab fa-pinterest"></i></Link>
            </div>
            <div className="home-button">
                <Link to="/home">Home</Link>
            </div>
            <div className="search-bar">Peridot!</div>
            <div className="icon">
                <a href="https://www.linkedin.com/in/erick-santos2/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className="icon">
                <a href="https://github.com/Arctive" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <NavLink to={`/users/${currentUserId}`} className="icon profile">
                <i className="fas fa-user"></i>
            </NavLink>
            <div className="options">
                <div className="icon" onClick={showMenu}><i className="drop-down fas fa-chevron-down"></i></div>
                <ul id="settings" className="drop-down-menu">
                    <li onClick={logout}>Log out</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;