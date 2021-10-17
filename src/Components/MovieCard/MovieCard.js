import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, ratings, id, selectMovie }) => {
  return (
    <article className="movie-card" id={id} onClick={() => selectMovie(id)}>
      <img className="card-poster" src={poster} alt={`${title} poster`} />
      <h3 className="card-title">{title}</h3>
      <p className="card-rating">⭐️ {Math.round(ratings * 10) / 10}</p>
    </article>
  );
};

export default MovieCard;
