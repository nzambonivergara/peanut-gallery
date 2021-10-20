function fetchAllMoviesData() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    (response) => checkResponse(response)
  );
}

function fetchSingleMovieData(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => checkResponse(response));
}

function fetchMovieTrailer(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2//movies/${id}/videos`
  ).then((response) => checkResponse(response));
}

function checkResponse(response) {
  if (!response.ok) {
    throw new Error(
      `Status: ${response.status} StatusText: ${response.status.text}`
    );
  }
  return response.json();
}

export { fetchAllMoviesData, fetchSingleMovieData, fetchMovieTrailer };
