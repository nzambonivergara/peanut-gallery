import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ poster, title, ratings, id }) => {
  const rating = Math.round(ratings * 10) / 10;
  return (
    <Link to={`/${id}`}>
      <article className="movie-card" id={id}>
        <img className="card-poster" src={poster} alt={`${title} poster`} />
        <div className="card-details">
          <h2 className="card-title">{title}</h2>
          <p className="card-rating" aria-label={`Rating ${rating}`}>
            ⭐️{rating}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
