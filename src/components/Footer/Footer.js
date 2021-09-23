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
                    <li><a href="#about">About us</a></li>
                    <li><a href="#about">Menu</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
                <ul className="footer-icon footer-menu">
                    <li><a href="#about"><FaFacebook /></a></li>
                    <li><a href="#about"><FaTwitter /></a></li>
                    <li><a href="#about"><FaInstagram /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;