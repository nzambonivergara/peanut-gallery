import React, { Component } from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import movieData from '../../sample-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      // movies: movieData.movies,
    };
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.movies }))
      .catch((error) => this.setState({ error: error.message }));
  };

  render() {
    return (
      <main className="App">
        <h1>The Peanut Gallery</h1>
        <MoviesContainer movies={this.state.movies} />
      </main>
    );
  }
}

export default App;
