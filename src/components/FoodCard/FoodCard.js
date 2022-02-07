import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "./FoodCard.css";

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

const FoodCard = ({ menu }) => {
    const controls = useAnimation();
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
    return (
        <>
            {menu.map((menus, index) => {
                return (
                    <motion.div
                        className="card"
                        whileHover={{ scale: 1.05 }}
                        ref={rootRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        key={index}
                    >
                        <img srcSet={`${menus.imgMobile} 300w, ${menus.img} 768w`} src={menus.img} alt="menu one" className="food-img" />
                        <div className="meal-desc">
                            <div className="name-price">
                                <span>{menus.menuTitle}</span>
                                <span className="price-tag">{menus.menuPrice}</span>
                            </div>
                            <p className="img-desc">{menus.menuDesc}</p>
                        </div>
                    </motion.div>
                )
            })}
        </>
    )
}
export default FoodCard;