import React from "react";
import './customButton.scss';
const CustomButton=({children,googleSignIn,inverted,...otherParams})=>(
 <button className={`${googleSignIn ? 'googleSignIn': ''} ${inverted ? 'inverted': ''} custom-button`} {...otherParams}>
{children}
 </button>
);
export default CustomButton;