// src/slices/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
