import React from "react";
import './customButton.scss';
const CustomButton=({children,googleSignIn,...otherParams})=>(
 <button className={`${googleSignIn ? 'googleSignIn': ''} custom-button`} {...otherParams}>
{children}
 </button>
);
export default CustomButton;