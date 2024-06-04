import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  type: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAllFilters(state, { payload }) {
      state.location = payload.location;
      state.equipment = payload.equipment;
      state.type = payload.type;
    },
  },
});

export const { setAllFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
