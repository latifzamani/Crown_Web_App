import React from "react";
import './customButton.scss';
const CustomButton=({children,...otherParams})=>(
 <button className="custom-button" {...otherParams}>
{children}
 </button>
);
export default CustomButton;