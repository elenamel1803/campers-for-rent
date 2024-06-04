import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(advert => advert._id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
