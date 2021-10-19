import React, { Component } from 'react';
import { fetchMovieTrailer } from '../../apiCalls';
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
    };
  }

  componentDidMount = () => {
    fetchMovieTrailer(this.props.movie.id)
      .then((singleMovieTrailer) => {
        const movieTrailer = singleMovieTrailer.videos.find(
          (video) => video.type === 'Trailer'
        );
        this.setState({ singleTrailer: movieTrailer });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    const {
      poster_path,
      average_rating,
      title,
      release_date,
      runtime,
      tagline,
      overview,
      budget,
      revenue,
      genres,
    } = this.props.movie;
    return (
      <main>
        <section className="single-movie-container">
          <div className="poster-rating-styling">
            <img
              className="single-movie-poster"
              src={poster_path}
              alt={title}
            />
          </div>
          <div className="movie-details">
            <div className="movie-title-styling">
              <h2>{title}</h2>
              <h3>
                {release_date} • {runtime}mins
              </h3>
            </div>
            <p className="movie-rating">
              ⭐️ {Math.round(average_rating * 10) / 10}
            </p>
            <p className="tagline">{tagline}</p>
            <p className="overview">{overview}</p>
            <p className="budget-revenue">
              Budget: {formatter.format(budget)} • Revenue:{' '}
              {formatter.format(revenue)}
            </p>
            <div className="genre-container">
              {genres.map((genre) => (
                <p className="movie-genre" key={genre}>
                  {genre}
                </p>
              ))}
            </div>
          </div>
        </section>
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
      </main>
    );
  }
}

export default SingleMovie;
