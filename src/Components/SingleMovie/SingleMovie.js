import React, { Component } from 'react';
import './SingleMovie.css';
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const SingleMovie = ({ movie }) => {
  console.log(movie.title);
  return (
    <section className="single-movie-container">
      {/* <img className="single-movie-backdrop" src={movie.backdrop_path} /> */}
      <div className="poster-rating-styling">
        <img className="single-movie-poster" src={movie.poster_path} />
        <p>⭐️ {Math.round(movie.average_rating * 10) / 10}</p>
      </div>
      <div className="movie-details">
        <div className="movie-title-styling">
          <h2>{movie.title}</h2>
          <h3>
            {movie.release_date} • {movie.runtime}mins
          </h3>
        </div>
        <p>{movie.tagline}</p>
        <p className="overview">{movie.overview}</p>
        <p>
          Budget: {formatter.format(movie.budget)} • Revenue:
          {formatter.format(movie.revenue)}
        </p>
        <p className="movie-genre">{movie.genres}</p>
      </div>
    </section>
  );
};

export default SingleMovie;
