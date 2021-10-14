import React, { Component } from 'react';
import logo from './logo.svg';
import movieData from './sample-data';
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
        <h1>The Peanut Gallery</h1>
      </main>
    );
  }
}

export default App;
