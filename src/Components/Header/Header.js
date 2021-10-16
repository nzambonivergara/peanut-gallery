import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="title-container">
        <h1>The Peanut Gallery</h1>
        <h2>Find a movie you love, like or hate...</h2>
      </div>
      <button>HOME</button>
    </header>
  )
}

export default Header;
