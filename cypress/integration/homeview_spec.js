describe('Home View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
        movies: [{"id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.142857142857143,
        "release_date": "2020-09-29"
      },
      {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 5.2727272727272725,
        "release_date": "2020-09-04"
      },
      {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 6.166666666666667,
        "release_date": "2020-08-20"
      }]
    }})
  });

  it('Should have an h1 that displays the title of the page', () => {
    cy.get('h1').contains('🍿 The Popcorn Gallery')
  });

  it('Should display all movie cards', () => {
    cy.get('h2').contains('Money Plane')
      .get('p').contains('⭐️6.1')
      .get('#694919 > img')
        .should('have.attr', 'src','https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
        .should('have.attr', 'alt').should('eq','Money Plane poster')

    cy.get('h2').contains('Mulan')
      .get('p').contains('⭐️5.3')
      .get('#337401 > img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
        .should('have.attr', 'alt').should('eq','Mulan poster')

    cy.get('h2').contains('Rogue')
      .get('p').contains('⭐️6.2')
      .get('#718444 > img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg')
        .should('have.attr', 'alt').should('eq','Rogue poster')
  });

  it('Should display an error message if the server is down', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        message: 'Server is down'
      }
    })
    .get('h2').contains('Sorry, no comments from the popcorn gallery! Try again later!')
  });

  it('Should display an error message if the movies request fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      body: {
        message: 'Movies not found'
      }
    })
    .get('h2').contains('Sorry, no comments from the popcorn gallery! Try again later!')
  });

  it('Should be able to click on a movie card and change the url', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 201,
      body: {
        "movie": {
          "id": 694919,
          "title": "Money Plane",
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "release_date": "2020-09-29",
          "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          "genres": [
          "Action"
          ],
          "budget": 0,
          "revenue": 0,
          "runtime": 82,
          "tagline": "",
          "average_rating": 6.142857142857143
        }
      }
    })

    cy.get('section > a').first().should('have.attr', 'href', '/694919').click()
      .url().should('include', 'http://localhost:3000/694919')
  });
});
