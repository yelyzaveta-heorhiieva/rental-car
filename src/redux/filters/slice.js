import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brands: [],
    selected: [],
    filters: {},
    loading: false,
    error: null,
  },
  reducers: {
    setSelected(state, action) {
      state.selected.push(action.payload);
    },
    resetSelected(state, action) {
      state.selected = state.selected.filter(
        ({ id }) => id !== action.payload.id,
      );
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = [...action.payload];
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelected, resetSelected, setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
