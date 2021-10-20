import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ returnHome, bannerImage }) => {
  return (
    <header className="Header">
      <div className="banner-container">
        <div className="overlay"></div>
        <img className="banner" src={bannerImage} alt="movie backdrop" />
      </div>
      <h1 className="title">🍿 The Popcorn Gallery</h1>
      <NavLink exact to="/" className="all-movies-nav">
        ALL MOVIES
      </NavLink>
    </header>
  );
};

export default Header;
