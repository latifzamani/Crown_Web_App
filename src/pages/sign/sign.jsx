import React from "react";
import './sign.scss';
import SignIn from "../sign-in/signIn";
import SignUp from "../sign-up/signUp";
const Sign=()=>(
   <div className="sign">  
       <SignIn/>
       <SignUp/>
   </div>    
);
export default Sign;