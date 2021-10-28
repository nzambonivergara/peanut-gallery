import React from 'react';
import { Link } from 'react-router-dom'
import './Error.css';

const Error = () => {
  return (
    <div className="error-message-container">
      <h2 className="error-message">
        Sorry, we burnt the popcorn!
      </h2>
      <Link to="/">
        <h2 className="error-message-link">
          Click here to return to the home page!
        </h2>
      </Link>
    </div>
  );
};

export default Error;
