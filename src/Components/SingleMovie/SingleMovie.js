import React, { Component } from 'react';
import Header from '../Header/Header';
import Error from '../Error/Error';
import { fetchMovieTrailer, fetchSingleMovieData } from '../../apiCalls';
import './SingleMovie.css';
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      singleTrailer: null,
      singleMovie: null,
    };
  }

  componentDidMount = () => {
    Promise.all([
      fetchSingleMovieData(this.props.id),
      fetchMovieTrailer(this.props.id),
    ])
      .then((singleMovieData) => {
        const movieTrailer = singleMovieData[1].videos.find(
          (video) => video.type === 'Trailer'
        );
        this.setState({
          singleTrailer: movieTrailer,
          singleMovie: singleMovieData[0].movie,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    return (
      <main>
        {this.state.singleMovie && (
          <>
            <Header bannerImage={this.state.singleMovie.backdrop_path} clearFilteredMovies={this.props.clearFilteredMovies}/>
            <section className="single-movie-container">
              <div className="poster-rating-styling">
                <img
                  className="single-movie-poster"
                  src={this.state.singleMovie.poster_path}
                  alt={this.state.singleMovie.title}
                />
              </div>
              <div className="movie-details">
                <div className="movie-title-styling">
                  <h2 className="movie-title">{this.state.singleMovie.title}</h2>
                  <h3>
                    {this.state.singleMovie.release_date} •{' '}
                    {this.state.singleMovie.runtime}mins
                  </h3>
                </div>
                <p className="movie-rating">
                  ⭐️{' '}
                  {Math.round(this.state.singleMovie.average_rating * 10) / 10}
                </p>
                <p className="tagline">{this.state.singleMovie.tagline}</p>
                <p className="overview">{this.state.singleMovie.overview}</p>
                <p className="budget-revenue">
                  Budget: {formatter.format(this.state.singleMovie.budget)} •
                  Revenue: {formatter.format(this.state.singleMovie.revenue)}
                </p>
                <div className="genre-container">
                  {this.state.singleMovie.genres.map((genre) => (
                    <p className="movie-genre" key={genre}>
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
        <section className="trailer-container">
          {this.state.singleTrailer && (
            <iframe
              width="600"
              height="400"
              src={`https://www.youtube.com/embed/${this.state.singleTrailer.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </section>
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default SingleMovie;
