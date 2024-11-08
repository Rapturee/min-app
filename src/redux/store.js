import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});

export default store;
