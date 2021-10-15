import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        poster={movie.poster_path}
        title={movie.title}
        ratings={movie.average_rating}
        id={movie.id}
        key={movie.id}
      />
    );
  });

  return (
    <section>
      <div>
        <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" />
      </div>
      <div className="movies-container">{movieCards}</div>;
    </section>
  );
};

export default MoviesContainer;
