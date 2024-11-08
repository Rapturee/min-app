import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    movies: []
  },
  reducers: {
    addMovie: (state, action) => {
      const existingMovie = state.movies.find(movie => movie.imdbID === action.payload.imdbID);
      if (!existingMovie) {
        state.movies.push({ ...action.payload, seen: false });
      }
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.imdbID !== action.payload);
    },
    updateMovie: (state, action) => {
      const movieIndex = state.movies.findIndex(movie => movie.imdbID === action.payload.imdbID);
      if (movieIndex !== -1) {
        state.movies[movieIndex] = { ...state.movies[movieIndex], ...action.payload };
      }
    },
    markAsSeen: (state, action) => {
      const movie = state.movies.find(movie => movie.imdbID === action.payload.imdbID);
      if (movie) {
        movie.seen = true;
      }
    }
  }
});

export const { addMovie, removeMovie, updateMovie, markAsSeen } = favoritesSlice.actions;
export default favoritesSlice.reducer;
