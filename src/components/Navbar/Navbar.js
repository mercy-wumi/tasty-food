// import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../../images/wrapped_green_logo@2x.png";
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


const Navbar = ({ showNav, setShowNav }) => {
    // const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-name">
                        <img src={logo} alt="logo" className="nav-logo" />
                    </div>
                    <ul className={showNav ? "mobile-nav" : "navbar-menu"}
                        onClick={() => setShowNav(false)}
                    >
                        <li className="links"><a href="#about">About us</a></li>
                        <li className="links"><a href="#menu">Menu</a></li>
                        <li className="links"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="openMenu" onClick={handleClick}>{showNav ? <MdClose /> : <FaBars />}</div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;