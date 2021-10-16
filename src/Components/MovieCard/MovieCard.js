import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, ratings, id, selectMovie }) => {
  return (
    <article id={id} onClick={() => selectMovie(id)}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>Rating: {Math.round(ratings * 10) / 10}</p>
    </article>
  );
};

export default MovieCard;
