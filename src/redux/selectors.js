export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.car;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectPage = (state) => state.cars.page;


export const selectBrands = (state) => state.filters.brands;
export const selectSelected = (state) => state.filters.selected;