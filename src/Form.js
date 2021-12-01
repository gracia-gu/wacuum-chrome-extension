import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register"
import "./App.css"

const Form = () => {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  
    const registerClicked = () => {
        setRegistartionFormStatus(true);
    }
    const loginClicked = () => {
        setRegistartionFormStatus(false);
    }
  
    const loginBtnProps = {
        borderBottom: registrationFormStatus 
          ? "solid 0px transparent"
          : "solid 2px #1059FF", 
    }
    const registerBtnProps = {
        borderBottom: registrationFormStatus
          ? "solid 2px #1059FF"
          : "solid 0px transparent", //Animate bottom border of register button
    }
  
    return (
        <div className="login-form">
            <div className="container">
                <div className="nav-buttons">
                    <button id="loginBtn" style={loginBtnProps} onClick={loginClicked}>Login</button>
                    <button id="registerBtn" style={registerBtnProps} onClick={registerClicked}>Register</button>
                </div>
                {!registrationFormStatus && (
                    <Login />
                )}
                {registrationFormStatus && (
                    <Register />
                )}
            </div>
        </div>
    )
  }
  
  export default Form;