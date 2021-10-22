import React, { Component } from 'react';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';
import SignIn from '../SignInPage/SignInPage';
import { fetchAllMoviesData } from '../../apiCalls';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        this.setState({
          movies: movieData.movies,
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

  returnHome = () => {
    this.setState({ singleMovie: null });
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
                <Header bannerImage={this.getRandomMovieImage()} />
                <MoviesContainer
                  movies={this.state.movies}
                  selectMovie={this.selectMovie}
                />
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
              return <SingleMovie id={currentMovieId} />;
            }}
          />
        </Switch>
        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
