import React from 'react';
import "./FoodClient.css"
import galleryOne from "../../images/galery_photo1@2x.png";
import galleryTwo from "../../images/galery_photo2@2x.png";
import galleryThree from "../../images/galery_photo3@2x.png";
import galleryFour from "../../images/galery_photo4@2x.png";
import galleryFive from "../../images/galery_photo5@2x.png";
import gallerySix from "../../images/galery_photo6@2x.png";

const FoodClient = () => {
    const foodGallery = [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive, gallerySix];
    return (
        <div id='clients' className="good-food">
            <h2>Good food = happy clients</h2>
            <div className="foods">
                {foodGallery.map((menuFood, index) => {
                    return (
                        <div className="food-image" key={index}>
                            <img src={menuFood} alt="galleryOne" className="img" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FoodClient;