import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import movieData from '../../sample-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: null
    };
  }

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({ singleMovie: selectedMovie })
  }

  render() {
    return (
      <main className="App">
        <h1>The Peanut Gallery</h1>
        {this.state.singleMovie ? <SingleMovie movie={this.state.singleMovie} /> :
          <MoviesContainer movies={this.state.movies} selectMovie={this.selectMovie}/>}
      </main>
    );
  }
}

export default App;
