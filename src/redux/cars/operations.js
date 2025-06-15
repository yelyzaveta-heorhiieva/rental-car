import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { api } from '../../services/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (
    { page = '1', brand, rentalPrice, minMileage, maxMileage },
    thunkAPI,
  ) => {
    try {
      const params = { page };
      if (brand !== undefined) params.brand = brand;
      if (rentalPrice !== undefined) params.rentalPrice = rentalPrice;
      if (minMileage !== undefined) params.minMileage = minMileage;
      if (maxMileage !== undefined) params.maxMileage = maxMileage;
      const response = await api.get('/cars', { params });
      return response.data;
    } catch (e) {
      console.log(e.response.data.message);
      toast.error('Request failed');
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchOne',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/cars/${id}`);
      return data;
    } catch (e) {
      toast.error('Car not found');
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
