import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdvertById, getAllAdverts } from 'api/advertsApi';

export const fetchAllAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllAdverts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOneAdvert = createAsyncThunk(
  'adverts/fetchOne',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAdvertById();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);