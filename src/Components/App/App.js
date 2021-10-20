import React, { Component } from 'react';
import Header from '../Header/Header';
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
      bannerImage: '',
    };
  }

  componentDidMount = () => {
    fetchAllMoviesData()
      .then((movieData) => {
        this.setState({
          movies: movieData.movies,
          bannerImage: this.getRandomMovieImage(movieData.movies),
        });
      })

      .catch((error) => this.setState({ error: error.message }));
  };

  getRandomMovieImage = (movies) => {
    return movies[Math.floor(Math.random() * movies.length)].backdrop_path;
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
                <Header bannerImage={this.state.bannerImage} />
                <MoviesContainer
                  movies={this.state.movies}
                  selectMovie={this.selectMovie}
                />
              </>
            );
          }}
        />
        <Route
          exact
          path="/:id"
          render={({ match }) => {
            const currentMovieId = parseInt(match.params.id);
            console.log('match', match);
            return (
              <>
                <SingleMovie id={currentMovieId} />
              </>
            );
          }}
        />

        {this.state.error && <Error />}
      </main>
    );
  }
}

export default App;
