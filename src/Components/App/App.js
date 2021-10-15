import React, { Component } from 'react';
import Header from '../Header/Header'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import movieData from '../../sample-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  render() {
    return (
      <main className="App">
        <Header />
        <MoviesContainer movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
