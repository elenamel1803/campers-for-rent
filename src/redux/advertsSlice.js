import { createSlice } from '@reduxjs/toolkit';
import { fetchAllAdverts, fetchOneAdvert } from './advertsOperations';

const initialState = {
  items: [],
  item: {},
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

const allFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const oneFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.item = payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllAdverts.pending, pending)
      .addCase(fetchAllAdverts.fulfilled, allFulfilled)
      .addCase(fetchAllAdverts.rejected, rejected)

      .addCase(fetchOneAdvert.pending, pending)
      .addCase(fetchOneAdvert.fulfilled, oneFulfilled)
      .addCase(fetchOneAdvert.rejected, rejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
