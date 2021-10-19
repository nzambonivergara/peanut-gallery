import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, ratings, id, selectMovie }) => {
  const rating = Math.round(ratings * 10) / 10;
  return (
    <article
      className="movie-card"
      tabindex="0"
      id={id}
      onKeyPress={(event) => {
        (event.key === "Enter" || "Space character") && selectMovie(id)
      }}
      onClick={() => selectMovie(id)} >
      <img className="card-poster" src={poster} alt={`${title} poster`} />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-rating" aria-label={`Rating ${rating}`}>⭐️{rating}</p>
      </div>
    </article>
  );
};

export default MovieCard;
