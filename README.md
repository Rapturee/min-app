# OMDb Movie Information App

## Beskrivning
En webbapplikation byggd med React och Redux som använder OMDb API för att söka och visa information om filmer. Användare kan söka efter filmer, lägga till dem i en lista, uppdatera filmens titel och ta bort dem från listan. Applikationen inkluderar också A/B-testning och grundläggande SEO-optimering.

## Funktioner
- Sök efter filmer via OMDb API
- Lägg till filmer i en lokal lista
- Uppdatera eller ta bort filmer från listan
- A/B-test för att visa olika versioner av sökknappen
- SEO-optimering med meta-taggar och robots.txt

## Förutsättningar
- [Node.js](https://nodejs.org/) installerat
- OMDb API-nyckel (ska anges i koden)

## Installation
1. **Klona repositoryt**:
   ```bash
   git clone https://github.com/Rapturee/movie-app.git
Navigera till projektmappen:
bash
Copy code
cd movie-app
Installera alla beroenden:
bash
Copy code
npm install
Konfiguration
Lägg till din OMDb API-nyckel:
Gå till src/App.js och ersätt const apiKey = 'YOUR_API_KEY' med din riktiga OMDb API-nyckel.
Kör applikationen
Starta utvecklingsservern med:

bash
Copy code
npm start
Öppna webbläsaren och gå till http://localhost:3000 för att använda applikationen.
Bygg för produktion
För att bygga applikationen för produktion, kör:

bash
Copy code
npm run build
Den färdiga byggda applikationen kommer att finnas i build/-mappen.

Felsökning
Om du stöter på problem med att pusha till GitHub eller starta projektet:

Kontrollera att du har rätt API-nyckel.
Kontrollera att dina beroenden är installerade (npm install).
Om du får autentiseringsproblem med GitHub, använd en personlig access token istället för ditt lösenord.
Tekniker som används
React: För frontend-ramverket.
Redux: För state management.
OMDb API: För att hämta filmdata.
Git: För versionshantering.