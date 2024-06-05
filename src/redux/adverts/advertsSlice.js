import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts } from './advertsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfilled = (state = initialState, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdverts.pending, pending)
      .addCase(fetchAllAdverts.fulfilled, fulfilled)
      .addCase(fetchAllAdverts.rejected, rejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
