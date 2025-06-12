import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';


const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    car: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...action.payload.cars];
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
