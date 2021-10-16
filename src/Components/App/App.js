import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import movieData from '../../sample-data';
import SingleMovie from '../SingleMovie/SingleMovie';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      singleMovie: null,
      // movies: movieData.movies,
    };
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((movieData) => this.setState({ movies: movieData.movies }))
      .catch((error) => this.setState({ error: error.message }));
  };

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.find((movie) => movie.id === id);
    this.setState({ singleMovie: selectedMovie });
  };

  render() {
    return (
      <main className="App">
        <h1>The Peanut Gallery</h1>
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
