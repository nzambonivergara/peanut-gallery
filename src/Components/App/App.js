import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error'
import { fetchAllMoviesData, fetchSingleMovieData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      singleMovie: null,
      bannerImage: ''
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        const randomMovie = movieData.movies[Math.floor(Math.random() * movieData.movies.length)]

        this.setState({ movies: movieData.movies, bannerImage: randomMovie.backdrop_path })
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

  returnHome = () => {
    this.setState({ singleMovie: null })
  }

  render() {
    return (
      <main className="App">
        <Header
          returnHome={this.returnHome}
          bannerImage={this.state.bannerImage}/>
          
        {this.state.singleMovie ? (
          <SingleMovie movie={this.state.singleMovie} />
        ) : (
          <MoviesContainer
            movies={this.state.movies}
            selectMovie={this.selectMovie}
          />
        )}
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
