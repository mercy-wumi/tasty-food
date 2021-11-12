import React, { useEffect, useRef, useState } from 'react';
import "./Header.css"
import food from "../../images/background+pict@2x.png";
import foodMobile from "../../images/background+pict.png";
import foodImg from "../../images/background_picture2@2x.png";
import { BsArrowRightShort } from 'react-icons/bs';
import { motion, useAnimation } from 'framer-motion';

function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        let currentRef = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            currentRef = ref.current;
            observer.observe(currentRef);
        }
        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

const Header = ({ setShowNav }) => {
    // const controls = useAnimation();
    const mobileControls = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    // useEffect(() => {
    //     if (onScreen) {
    //         controls.start({
    //             x: 0,
    //             opacity: 1,
    //             transition: {
    //                 type: 'spring',
    //                 stiffness: 400
    //             }
    //         });
    //     }
    // }, [onScreen, controls]);
    useEffect(() => {
        if (onScreen) {
            mobileControls.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 400
                }
            });
        }
    }, [onScreen, mobileControls]);
    return (
        <>
            <div className="header">
                <div className="header-text">
                    <motion.div
                        className="text"
                        initial={{ opacity: 0, x: -200 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,

                            }
                        }}
                    >
                        <h1>
                            Healthy &amp; Fresh Food For You
                        </h1>
                        <p>
                            Created for lovers of healthy delicious and non-obvious food.
                        </p>
                        <button className="check-menu">
                            Check Menu
                            <BsArrowRightShort />
                        </button>
                    </motion.div>
                    <img src={foodImg} alt="Nice Delicacy" className="foodImg" />
                </div>
                <div className="header-img">
                    <span className="background"></span>
                    <motion.img
                        initial={{ opacity: 0, x: 200 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'spring',
                                stiffness: 400
                            }
                        }}
                        src={food}
                        alt="Nice Delicacy"
                        className="image"
                    />
                </div>
            </div>
            <div className="mobile-header" onClick={() => setShowNav(false)}>
                <span className="mobile-background"></span>
                <div className="mobile-content">
                    <div className="text">
                        <h1>Healthy &amp; Fresh Food For You</h1>
                        <p>
                            Created for lovers of healthy delicious and non-obvious food.
                        </p>
                        <button className="check-menu">
                            Check Menu
                            <BsArrowRightShort />
                        </button>
                    </div>
                    <div className="mobile-img">
                        <motion.img
                            ref={rootRef}
                            initial={{ opacity: 0, x: 100 }}
                            animate={mobileControls}
                            src={foodMobile}
                            alt="Nice Delicacy"
                            className="image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;