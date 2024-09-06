import React from 'react';
import './Button.css'
import { ButtonImages } from '../../../utils/constant/images';



const Button = ({ text, isImg }) => {
    const { appleIcon, appleIcon2 } = ButtonImages;
    console.log(isImg)
    // isImg ? console.log("hai") : console.log("ni hai")
    // isImg && "hai";
    return (
        <div>
            <button>{isImg ? <img src={appleIcon} alt="" /> : null} {text}</button>

            {/* <button>{isImg && <img src={appleIcon} alt="" />} {text}</button> */}
        </div>
    )
}

export default Button
