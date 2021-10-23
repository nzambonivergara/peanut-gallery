import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.css';

const MoviesContainer = ({ movies, selectMovie }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        poster={movie.poster_path}
        title={movie.title}
        ratings={movie.average_rating.toFixed(1)}
        id={movie.id}
        key={movie.id}
        selectMovie={selectMovie}
      />
    )
  })

  return (
    <section className="movies-container">
      {movies.length ? movieCards : <h2 className="noMatch">🍿 We couldn't find any matches 🍿</h2>}
    </section>
  )
}

export default MoviesContainer;
