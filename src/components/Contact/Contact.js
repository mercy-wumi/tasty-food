import React from 'react';
import "./Contact.css"
import timeIcon from "../../images/time_icon@2x.png"
import phoneIcon from "../../images/phone_icon@2x.png"
import locationIcon from "../../images/localization_icon@2x.png"

const Contact = () => {
    const contact = [
        {
            icon: timeIcon,
            value: "Today 12pm - 9pm",
            name: "Working Hours"
        },
        {
            icon: locationIcon,
            value: "Piastowska 4, Cracow",
            name: "Find us"
        },
        {
            icon: phoneIcon,
            value: "503 204 176",
            name: "Call to Us"
        }
    ]
    return (
        <div className="contact">
            {contact.map((contactSec, index) => {
                return (
                    <div className="contact-card" key={index}>
                        <img src={contactSec.icon} alt="icon" className="icons" />
                        <h4>{contactSec.value}</h4>
                        <p>{contactSec.name}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Contact;