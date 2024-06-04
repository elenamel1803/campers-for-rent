import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/advertsSlice.js';
import { favoriteReducer } from './favorite/favoriteSlice.js';
import { filtersReducer } from './filters/filtersSlice.js';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorite: persistedReducer,
  filters: filtersReducer,
});

export default rootReducer;
