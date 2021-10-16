function fetchAllMoviesData() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    (response) => response.json()
  );
}

function fetchSingleMovieData(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => response.json());
}

export { fetchAllMoviesData, fetchSingleMovieData };
