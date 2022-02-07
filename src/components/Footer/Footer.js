import React from 'react';
import "./Footer.css";
import logoFooter from "../../images/wrapped_green_logo2@2x.png";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <span className="background-footer"></span>
            <div className="footer-center">
                <div className="logo-footer">
                    <img src={logoFooter} alt="logo" className="logo-ft" />
                </div>
                <ul className="footer-menu">
                    <li>
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
                    <li>
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
                    <li>
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
                <ul className="footer-icon footer-menu">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;