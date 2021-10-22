import React, { Component } from 'react';
import './SignInPage.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <form className="signin-form">
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default SignIn;
