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
                        <a href="/">
                            <img src={logo} alt="logo" className="nav-logo" />
                        </a>
                    </div>
                    <ul className={showNav ? "mobile-nav" : "navbar-menu"}
                        onClick={() => setShowNav(false)}
                    >
                        <li className="links">
                            <a
                                href="/about"
                                onClick={e => {
                                    let about = document.getElementById("about");
                                    e.preventDefault();  // Stop Page Reloading
                                    about && about.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                            >
                                About us
                            </a>
                        </li>
                        <li className="links">
                            <a
                                href="/menu"
                                onClick={e => {
                                    let menu = document.getElementById("menu");
                                    e.preventDefault();  // Stop Page Reloading
                                    menu && menu.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                            >
                                Menu
                            </a>
                        </li>
                        <li className="links">
                            <a
                                href="/contact"
                                onClick={e => {
                                    let contact = document.getElementById("contact");
                                    e.preventDefault();  // Stop Page Reloading
                                    contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="openMenu" onClick={handleClick}>{showNav ? <MdClose /> : <FaBars />}</div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;