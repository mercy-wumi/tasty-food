import React from 'react';
import "./FoodCard.css"
const FoodCard = ({ menu }) => {
    console.log(menu)
    return (
        <>
            {menu.map((menus, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={menus.img} alt="menu one" className="food-img" />
                        <div className="meal-desc">
                            <div className="name-price">
                                <span>{menus.menuTitle}</span>
                                <span className="price-tag">{menus.menuPrice}</span>
                            </div>
                            <p className="img-desc">{menus.menuDesc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default FoodCard;