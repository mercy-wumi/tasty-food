import React from 'react';
import "../Header/Header.css"
import "./About.css"
import vegetable from "../../images/vegetable_table@2x.png";
import { BsArrowRightShort } from 'react-icons/bs';

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="about-img">
                    <span className="background-about"></span>
                    <img src={vegetable} alt="Nice Delicacy" className="image" />
                </div>
                <div className="about-text">
                    <h3 className="about-heading">About us</h3>
                    <h2>Few words about us</h2>
                    <p>
                        We are not ordinary food truck. We create a place overflowing
                        with positive energy that it expresses important to us values. <br /> Get to know them specifically.
                    </p>
                    <button className="check-menu green-color">
                        Learn More
                        <BsArrowRightShort />
                    </button>
                </div>
            </div>
            <div className="mobile-about">
                <div className="about-text">
                    <h3 className="about-heading">About us</h3>
                    <h2>Few words about us</h2>
                    <p>
                        We are not ordinary food truck. We create a place overflowing
                        with positive energy that it expresses important to us values. <br /> Get to know them specifically.
                    </p>
                    <button className="check-menu green-color">
                        Learn More
                        <BsArrowRightShort />
                    </button>
                </div>
                <div className="about-img">
                    <img src={vegetable} alt="Nice Delicacy" className="image" />
                </div>
            </div>
        </div>
    )
}
export default About;