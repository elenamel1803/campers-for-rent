import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllAdverts } from 'api/advertsApi';

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
