import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';
import { fetchAllMoviesData } from '../../apiCalls';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      filteredMovies: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        this.setState({
          movies: movieData.movies,
          filteredMovies: movieData.movies,
          isLoading: false,
        });
      })
      .catch((error) =>
        this.setState({ error: error.message, isLoading: false })
      );
  };

  getRandomMovieImage = () => {
    if (this.state.movies.length) {
      return this.state.movies[
        Math.floor(Math.random() * this.state.movies.length)
      ].backdrop_path;
    }
  };

  filterMovies = (searchTerm) => {
    const filteredMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
    this.setState({ filteredMovies: filteredMovies });
  };

  clearFilteredMovies = () => {
    this.setState({ filteredMovies: this.state.movies });
  };

  render() {
    return (
      <main className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <Header
                  bannerImage={this.getRandomMovieImage()}
                  clearFilteredMovies={this.clearFilteredMovies}
                />
                <SearchForm filterMovies={this.filterMovies} />
                {this.state.movies.length && (
                  <MoviesContainer
                    movies={this.state.filteredMovies}
                    selectMovie={this.selectMovie}
                  />
                )}
                {this.state.isLoading && (
                  <h3 className="loading">🍿 Loading...</h3>
                )}
                {this.state.error && <Error />}
              </>
            );
          }}
        />
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            const currentMovieId = parseInt(match.params.id);
            return (
              <SingleMovie
                id={currentMovieId}
                clearFilteredMovies={this.clearFilteredMovies}
              />
            );
          }}
        />
      </main>
    );
  }
}

export default App;
