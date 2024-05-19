import React from "react";
import FormInput from "../../components/formInput/formInput";
import CustomButton from "../../components/customButton/customButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './signUp.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }
        }
    }

    handleSubmit= async event=>{
            event.preventDefault();
            const { displayName, email, password, confirmPassword } = this.state;
            
            if(password !== confirmPassword){
                alert("Password don't match ⚠");
                return;
            };
             try {
                const {user}=await auth.createUserWithEmailAndPassword(email,password);
                await createUserProfileDocument(user,{displayName});
                
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
             } catch (error) {
                console.error(error)
             }
    };
    handleChange=(event)=>{
            const {name,value}=event.target;
            this.setState({
                [name]:value,
            })
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signUp">
                <h1 className="title">l don't have an account</h1>
                <span>Sign up with your E-mail and Password</span>
                <form className="signUpForm" onSubmit={this.handleSubmit}>
                    <FormInput type='text' placeholder='Name' onChange={this.handleChange} value={displayName}  required />
                    <FormInput type='email' placeholder='E-mail' onChange={this.handleChange}value={email}  required />
                    <FormInput type='password' placeholder='Password'onChange={this.handleChange} value={password} required />
                    <FormInput type='password'placeholder='Confirm Password' onChange={this.handleChange}value={confirmPassword} required />
                    <CustomButton type='submit' onSubmit>SIGN UP</CustomButton>
                </form>

            </div>
        );
    }
}

export default  SignUp;