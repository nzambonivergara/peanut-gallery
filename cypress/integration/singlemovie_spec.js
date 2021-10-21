describe('Single Movie User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 201,
        body: {
          movie: {
            id: 694919,
            title: 'Money Plane',
            poster_path:
              'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
            backdrop_path:
              'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
            release_date: '2020-09-29',
            overview:
              "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
            genres: ['Action'],
            budget: 0,
            revenue: 0,
            runtime: 82,
            tagline: '',
            average_rating: 6.142857142857143,
          },
        },
      }
    );
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos',
      {
        statusCode: 201,
        body: {
          videos: [
            {
              id: 330,
              movie_id: 694919,
              key: 'aETz_dRDEys',
              site: 'YouTube',
              type: 'Trailer',
            },
          ],
        },
      }
    );
  });

  it('Should show the user single movie details once they have clicked on a movie card', () => {
    cy.get('#694919')
      .click()
      .url()
      .should('include', '694919')
      .get('h2')
      .contains('Money Plane')
      .get('.overview')
      .contains(
        "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
      )
      .get('.movie-rating')
      .contains(6.1)
      .get('.budget-revenue')
      .contains('Budget: $0 • Revenue: $0')
      .get('.movie-genre')
      .contains('Action');
  });

  it('Should display the movie trailer of the clicked movie card', () => {
    cy.get('#694919')
      .click()
      .get('iframe[src="https://www.youtube.com/embed/aETz_dRDEys"]')
      .should('have.attr', 'title');
  });

  it('Should display an error message if the server is down', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 500,
        body: {
          message: 'Server is down',
        },
      }
    );
    cy.get('#694919')
      .click()
      .url()
      .should('include', '694919')
      .get('h2')
      .contains(
        'Sorry, no comments from the popcorn gallery! Try again later!'
      );
  });

  it('Should display an error message if the movies request fails', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 404,
        body: {
          message: 'Movies not found',
        },
      }
    );
    cy.get('#694919')
      .click()
      .url()
      .should('include', '694919')
      .get('h2')
      .contains(
        'Sorry, no comments from the popcorn gallery! Try again later!'
      );
  });

  it('Should allow the user to return home by clicking the ALL MOVIES button', () => {
    cy.visit('http://localhost:3000/694919');
    cy.get('.all-movies-nav').click().url().should('not.include', '694919');
  });
});
