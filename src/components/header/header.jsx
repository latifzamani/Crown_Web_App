import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/crown.svg";
// import {ReactComponent}
const Header=()=>(
    <div className="header">
       <Link to='/' className="logo-container">
         <Logo className='logo'/>
       </Link>
       <div className="options"> 
        <Link to='/shop' className="option">SHOP</Link>
        <Link to='/contact' className="option">CONTACT</Link>
        <Link to='/sign' className="option">SIGN IN</Link>
       </div>
    </div>
);
export default Header;