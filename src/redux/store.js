import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slice'
import filtersReducer from './filters/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filtersConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['selected'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: persistReducer(filtersConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
