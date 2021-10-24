import React, { Component } from 'react';
import './SignInPage.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <body className="sign-in-page">
        <form className="sign-in-form">
          <h2 className="sign-in-title">Sign In</h2>
          <div className="input-containers">
            <input
              className="user-name-input"
              type="text"
              placeholder="Username"
            />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
            />
            <Link exact to="/" className="sign-in">
              SIGN IN
            </Link>
          </div>
        </form>
      </body>
    );
  }
}

export default SignIn;
