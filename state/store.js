// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './userSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
