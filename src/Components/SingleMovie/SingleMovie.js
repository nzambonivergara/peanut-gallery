import React from 'react';
import './SingleMovie.css';

// "movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }
// { title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenue, runtime, tagline }
const SingleMovie = () => {
  return (
    <section className="single-movie-container">
      {/* <div> */}
      <img
        className="single-movie-poster"
        src="https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
      />
      {/* </div> */}
      <div className="movie-details">
        <h2>Fake Movie Title</h2>
        <h3>2019 • 139mins</h3>
        <p>Drama</p>
        <p>It's a movie!</p>
        <p>
          Some overview that is full of buzzwords to attempt to entice you to
          watch this movie! Explosions! Drama! True love! Robots! A cute dog!
        </p>
        <p>Rating: 6.0</p>
        <p>Budget: $63,000,000 • Revenue: $100,853,753 </p>
      </div>
    </section>
  );
};

export default SingleMovie;
