import React from 'react';
import "./Menu.css"
import FoodCard from '../FoodCard/FoodCard';
import menuOne from "../../images/menu_photo1@2x.png"
import menuTwo from "../../images/menu_photo2@2x.png"
import menuThree from "../../images/menu_photo_3@2x.png"
const Menu = () => {
    const foodCard = [
        {
            img: menuOne,
            menuTitle: "Mighty Burger",
            menuDesc: "Served with fires and drinks",
            menuPrice: "8$"
        },
        {
            img: menuTwo,
            menuTitle: "Chickpae's salad",
            menuDesc: "Served with fires and drinks",
            menuPrice: "4$"
        },
        {
            img: menuThree,
            menuTitle: "Chickpae's wrap",
            menuDesc: "Served with fires and drinks",
            menuPrice: "3$"
        }
    ]
    return (
        <div className="menu">
            <div className="menu-heading">
                <h3>Menu</h3>
                <h2>Explore Our Best Food</h2>
                <p>Below you can see our best selling meals!</p>
            </div>
            <div className="best-meals">
                <FoodCard menu={foodCard} />
            </div>
        </div>
    )
}
export default Menu;