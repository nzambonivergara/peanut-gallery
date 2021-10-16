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
      {/* <div> */}
      <img className="single-movie-poster" src={movie.poster_path} />
      {/* </div> */}
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <h3>
          {movie.release_date} • {movie.runtime}mins
        </h3>
        <p>{movie.genres}</p>
        <p>{movie.tagline}</p>
        <p>{movie.overview}</p>
        <p>Rating: {Math.round(movie.average_rating * 10) / 10}</p>
        <p>
          Budget: {formatter.format(movie.budget)} • Revenue:
          {formatter.format(movie.revenue)}
        </p>
      </div>
    </section>
  );
};

export default SingleMovie;
