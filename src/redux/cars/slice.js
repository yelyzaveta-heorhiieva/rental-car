import { createSlice } from '@reduxjs/toolkit';
import { fetchCarById, fetchCars } from './operations';

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    car: {},
    loading: false,
    error: null,
    page: 1,
    totalPages: null,
  },
  reducers: {
    upDatePage(state, action) {
      state.page = action.payload;
    },
    resetItems(state, action) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.cars].filter(
          (item, index, self) =>
            index === self.findIndex((i) => i.id === item.id),
        );
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, handleRejected);
  },
});

export const { upDatePage, resetItems } = carsSlice.actions;

export default carsSlice.reducer;
