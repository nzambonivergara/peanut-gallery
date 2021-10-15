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
      <div className="banner-container">
        <img
          className="banner"
          src='https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg'
        />
      </div>
      <div className="movies-container">{movieCards}</div>;
    </section>
  );
};

export default MoviesContainer;
