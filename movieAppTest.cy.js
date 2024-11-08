describe('Movie App Tests', () => {
    // Testar att ladda startsidan
    it('Loads the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.contains('OMDb Movie Information').should('exist');
    });
  
    // Testar att söka efter en film
    it('Searches for a movie', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="text"]').type('Guardians of the Galaxy');
      
      // Hanterar både A/B testing knappar
      cy.get('button').then(($btn) => {
        if ($btn.text().includes('Search Movies')) {
          cy.get('button').contains('Search Movies (Version A)').click();
        } else {
          cy.get('button').contains('Find Film (Version B)').click();
        }
      });
  
      cy.wait(3000); // Vänta för att resultaten ska laddas
      cy.contains('Guardians of the Galaxy (2014)').should('exist');
    });
  
    // Testar att lägga till en film i favoriter
    it('Adds a movie to favorites', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="text"]').type('Guardians');
  
      cy.get('button').then(($btn) => {
        if ($btn.text().includes('Search Movies')) {
          cy.get('button').contains('Search Movies (Version A)').click();
        } else {
          cy.get('button').contains('Find Film (Version B)').click();
        }
      });
  
      cy.wait(3000);
      cy.get('button').contains('Favorite').first().click();
      cy.contains('My Movie List').should('exist');
    });
  
    // Testar att ta bort en film från favoriter
    it('Removes a movie from favorites', () => {
      cy.visit('http://localhost:3000');
      cy.get('input[type="text"]').type('Guardians');
  
      cy.get('button').then(($btn) => {
        if ($btn.text().includes('Search Movies')) {
          cy.get('button').contains('Search Movies (Version A)').click();
        } else {
          cy.get('button').contains('Find Film (Version B)').click();
        }
      });
  
      cy.wait(3000);
      cy.get('button').contains('Favorite').first().click();
      cy.contains('My Movie List').should('exist');
  
      // Ta bort filmen från listan
      cy.wait(1000);
      cy.get('button').contains('Remove').first().click();
      cy.contains('My Movie List').should('not.contain', 'Guardians of the Galaxy');
    });
  });
  