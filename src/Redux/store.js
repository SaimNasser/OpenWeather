import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { openWeatherApi } from '../backend/Services';
import cityReducer from './features/citySlice';

export const store = configureStore({
  reducer: {
    City: cityReducer,
    [openWeatherApi.reducerPath]: openWeatherApi.reducer
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(openWeatherApi.middleware)
});
setupListeners(store.dispatch)