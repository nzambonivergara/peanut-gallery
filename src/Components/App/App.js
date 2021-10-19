import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';
import { fetchAllMoviesData, fetchSingleMovieData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      singleMovie: null,
      bannerImage: '',
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        this.setState({
          movies: movieData.movies,
          bannerImage: this.getRandomMovieImage(movieData.movies),
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  };

  selectMovie = (id) => {
    fetchSingleMovieData(id)
      .then((singleMovieData) =>
        this.setState({ singleMovie: singleMovieData.movie })
      )
      .catch((error) => this.setState({ error: error.message }));
  };

  getRandomMovieImage = (movies) => {
    return movies[Math.floor(Math.random() * movies.length)].backdrop_path;
  };

  returnHome = () => {
    this.setState({ singleMovie: null });
  };

  render() {
    return (
      <main className="App">
        {this.state.singleMovie ? (
          <>
            <Header
              returnHome={this.returnHome}
              bannerImage={this.state.singleMovie.backdrop_path}
            />
            <SingleMovie movie={this.state.singleMovie} />
          </>
        ) : (
          <>
            <Header
              returnHome={this.returnHome}
              bannerImage={this.state.bannerImage}
            />
            <MoviesContainer
              movies={this.state.movies}
              selectMovie={this.selectMovie}
            />
          </>
        )}
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
