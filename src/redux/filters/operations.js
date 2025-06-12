import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { api } from '../../services/api';

export const fetchBrands = createAsyncThunk(
  'filters/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const {data} = await api.get('/brands');
      return data;
    } catch (e) {
      toast.error('Request failed');
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

