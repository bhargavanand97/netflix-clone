import React, { Component } from 'react';
import './loginscreen.scss';

const LoginScreen = ()=> {
    return (
        <div className="loginScreen">            
            <div className="loginScreen__background">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="loginScreen__logo" alt="Login Logo"/>
                <button className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient" />               
            </div>
            <div className="loginScreen__body">
                <h1 className="loginScreen__heading1">Unlimited films, TV Programmes and more.</h1>
                <h2 className="loginScreen__heading2">Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen__input">
                    <form action="loginScreen__input-form">
                        <input type="email" placeholder="Email Address" className="loginScreen__input-email"/>
                        <button className="loginScreen__input-button">GET STARTED</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
