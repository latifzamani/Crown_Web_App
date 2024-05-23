import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { ReactComponent as Logo} from "../../assets/crown.svg";
import CardIcon from "../cardIcon/cardIcon";
import CardDropdown from "../cardDropdown/cardDropdown";
// import {ReactComponent}
const Header=({currentUser,hidden})=>(
    <div className="header">
       <Link to='/' className="logo-container">
         <Logo className='logo'/>
       </Link>
       <div className="options"> 
        <Link to='/' className="option">HOME</Link>
        <Link to='/shop' className="option">SHOP</Link>
        <Link to='/contact' className="option">CONTACT</Link>
        {
          currentUser ? 
          (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>) :
          (<Link to='/sign' className="option">SIGN IN</Link>)
          
        }
        <CardIcon/>
       </div>
       {hidden ? null :<CardDropdown/>}
    </div>
);
const mapStateToProps=({user:{currentUser},card:{hidden}})=>(
  {
  currentUser,
  hidden
  }
);
export default connect(mapStateToProps)(Header);