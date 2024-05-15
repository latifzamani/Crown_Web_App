import React from "react";
import './signIn.scss';
import FormInput from "../../components/formInput/formInput";
import CustomButton from "../../components/customButton/customButton";
class SignIn extends React.Component{
    constructor(){
     super();
     this.state={
        email:'',
        password:'',
     }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''});

    };

    handleChange=(event)=>{
         event.preventDefault();
         const {value,name}=event.target;
         this.setState({[name]:value});
         console.log(name,value);
    };

    render(){
     return(
         <div className="signIn">
            <h1 className="title">I have already an account</h1>
            <span>Sign in with your E-mail and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" handleChange={this.handleChange} lable="E-mail"name="email" value={this.state.email} required/>
                <FormInput type="password" handleChange={this.handleChange} lable="Password" name="password" value={this.state.password} required/>
                <CustomButton type="submit" >Sign In</CustomButton>
            </form>
             
         </div>
     );
    }
 };
 export default SignIn;