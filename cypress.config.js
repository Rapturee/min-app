const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: './*.cy.js', // Ändra här för att matcha din filstruktur
    supportFile: false,
  },
});
