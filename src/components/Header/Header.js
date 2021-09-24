import React from 'react';
import "./Header.css"
import food from "../../images/background+pict@2x.png";
import foodImg from "../../images/background_picture2@2x.png";
import { BsArrowRightShort } from 'react-icons/bs';
// import MobileNav from '../MobileNav/MobileNav';


const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <div className="text">
                        <h1>Healthy & Fresh Food For You</h1>
                        <p>
                            Created for lovers of healthy delicious and non-obvious food.
                        </p>
                        <button className="check-menu">
                            Check Menu
                            <BsArrowRightShort />
                        </button>
                    </div>
                    <img src={foodImg} alt="Nice Delicacy" className="foodImg" />
                </div>
                <div className="header-img">
                    <span className="background"></span>
                    <img src={food} alt="Nice Delicacy" className="image" />
                </div>
            </div>
            <div className="mobile-header">
                {/* <MobileNav /> */}
                <span className="mobile-background"></span>
                <div className="mobile-content">
                    <div className="text">
                        <h1>Healthy & Fresh Food For You</h1>
                        <p>
                            Created for lovers of healthy delicious and non-obvious food.
                        </p>
                        <button className="check-menu">
                            Check Menu
                            <BsArrowRightShort />
                        </button>
                    </div>
                    <div className="mobile-img">
                        <img src={food} alt="Nice Delicacy" className="image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;