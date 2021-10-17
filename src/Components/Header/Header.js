import React from 'react';
import './Header.css';

const Header = ({ returnHome, bannerImage }) => {
  return (
    <header className="Header">
      <div className="banner-container">
        <div className="overlay"></div>
        <img
          className="banner"
          src={bannerImage}
        />
      </div>
      <div className="title-container">
        <h1 className="title">The Peanut Gallery</h1>
      </div>
      <button className="all-movies-button" onClick={() => returnHome()}>ALL MOVIES</button>

    </header>
  )
}

export default Header;
