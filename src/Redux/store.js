import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './features/citySlice';
import weekdayReducer from './features/weekdaySlice';

export const store = configureStore({
  reducer: {
    City: cityReducer,
    Weekday: weekdayReducer,
  },
});
