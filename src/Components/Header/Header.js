import React from 'react';
import './Header.css';
import popcorn from '../../popcorn1.png';
import { NavLink } from 'react-router-dom';

const Header = ({ returnHome, bannerImage }) => {
  return (
    <header className="Header">
      <div className="banner-container">
        <div className="overlay"></div>
        <img className="banner" src={bannerImage} alt="movie backdrop" />
      </div>
      <div className="title-container">
        <h1 className="title">
          The <span>P🍿pcorn</span> Gallery
        </h1>
      </div>
      <NavLink exact to="/" className="all-movies-nav">
        ALL MOVIES
      </NavLink>
      <NavLink exact to="/signin" className="sign-in-nav">
        SIGN IN
      </NavLink>
    </header>
  );
};

export default Header;
