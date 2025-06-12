export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectCars = (state) => state.cars.items;
export const selectCarById = (state) => state.cars.car;