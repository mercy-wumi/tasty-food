import React, { useState, useRef, useEffect } from 'react';
import "../Header/Header.css"
import "./About.css"
import vegetable from "../../images/vegetable_table@2x.png";
import vegeMobile from "../../images/vegetable_table.png";
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

const About = () => {
    const controls = useAnimation();
    const aboutAni = useAnimation();
    const rootRef = useRef();
    const onScreen = useOnScreen(rootRef);
    useEffect(() => {
        if (onScreen) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, controls]);
    useEffect(() => {
        if (onScreen) {
            aboutAni.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    duration: "1",
                    ease: "easeOut"
                }
            });
        }
    }, [onScreen, aboutAni]);
    return (
        <div id="about">
            <div className="about">
                <div className="about-img">
                    <span className="background-about"></span>
                    <img src={vegetable} alt="Nice Delicacy" className="image" />
                </div>
                <div className="about-text">
                    <h3 className="about-heading">About us</h3>
                    <motion.h2
                        ref={rootRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={controls}
                    >
                        Few words about us
                    </motion.h2>
                    <motion.p
                        ref={rootRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={aboutAni}>
                        We are not ordinary food truck. We create a place overflowing
                        with positive energy that it expresses important to us values. <br /> Get to know them specifically.
                    </motion.p>
                    <a
                        href='/clients'
                        onClick={e => {
                            let clients = document.getElementById('clients')
                            e.preventDefault();
                            clients && clients.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}>
                        <button className="check-menu green-color">
                            Learn More
                            <BsArrowRightShort />
                        </button>
                    </a>
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
                    <a
                        href='/clients'
                        onClick={e => {
                            let clients = document.getElementById('clients')
                            e.preventDefault();
                            clients && clients.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}>
                        <button className="check-menu green-color">
                            Learn More
                            <BsArrowRightShort />
                        </button>
                    </a>
                </div>
                <div className="about-img">
                    <img src={vegeMobile} alt="Nice Delicacy" className="image" />
                </div>
            </div>
        </div>
    )
}
export default About;