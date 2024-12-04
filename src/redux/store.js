import { configureStore } from '@reduxjs/toolkit';
import petReducer from './petReducer';

export const store = configureStore({
  reducer: {
    pet: petReducer,
  },
});
