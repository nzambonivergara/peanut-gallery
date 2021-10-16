import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import { fetchAllMoviesData, fetchSingleMovieData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      singleMovie: null,
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => this.setState({ movies: movieData.movies }))
      .catch((error) => this.setState({ error: error.message }));
  };

  selectMovie = (id) => {
    fetchSingleMovieData(id)
      .then((singleMovieData) =>
        this.setState({ singleMovie: singleMovieData.movie })
      )
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    return (
      <main className="App">
        <Header />
        {this.state.singleMovie ? (
          <SingleMovie movie={this.state.singleMovie} />
        ) : (
          <MoviesContainer
            movies={this.state.movies}
            selectMovie={this.selectMovie}
          />
        )}
      </main>
    );
  }
}

export default App;
