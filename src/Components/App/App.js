import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';
import SignIn from '../SignInPage/SignInPage';
import { fetchAllMoviesData } from '../../apiCalls';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      filteredMovies: [],
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        this.setState({
          movies: movieData.movies,
          filteredMovies: movieData.movies,
        });
      })
      .catch((error) => this.setState({ error: error.message }));
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
                  bannerImage={this.getRandomMovieImage()}  clearFilteredMovies={this.clearFilteredMovies}
                />
                <SearchForm filterMovies={this.filterMovies} />
                <NavLink to="/signin" className="sign-in-nav">
                  SIGN IN
                </NavLink>
                {this.state.movies.length ? (
                  <MoviesContainer
                    movies={this.state.filteredMovies}
                    selectMovie={this.selectMovie}
                  />
                ) : (
                  <h2 className="loading">🍿 Loading...</h2>
                )}
              </>
            );
          }}
        />
        <Switch>
          <Route
            exact
            path="/signin"
            render={() => {
              return (
                <>
                  <Header bannerImage={this.getRandomMovieImage()} />
                  <SignIn />
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
        </Switch>
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
