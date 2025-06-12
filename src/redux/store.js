import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice'

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    // filters: filtersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});


