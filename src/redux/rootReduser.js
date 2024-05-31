import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice.js';
// import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  adverts: advertsReducer,
  //   filter: filterReducer,
});

export default rootReducer;
