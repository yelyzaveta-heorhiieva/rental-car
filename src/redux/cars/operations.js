import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { api } from '../../services/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
      try {
        const response = await api.get('/cars?page=1&limit=12');
        //   const response = await api.get(
        //     `/cars?page=${page}&brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}`,
        //   );
        console.log(response.data);
        return response.data;
      } catch (e) {
      toast.error('Request failed');
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchOne',
  async (id, thunkAPI) => {
    try {
      const {data} = await api.get(`/cars/${id}`);
      return data;
    } catch (e) {
      toast.error('Car not found');
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);