
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  users : [],
  formData: {
    id: '',
    username: '',
    email: '',
    role: ''
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
     state.users = action.payload
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading  = false
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
    resetFormData(state) {
      state.formData = initialState.formData;
    }
  },
});

export const { startLoading,stopLoading, setError, setUser, setFormData, resetFormData } = userSlice.actions;
export default userSlice.reducer;

