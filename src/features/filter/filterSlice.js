import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  filterText: '',
  searchText: '',
};

// filter slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterStatus: (state, action) => {
      state.filterText = action.payload;
    },
    searchStatus: (state, action) => {
      state.searchText = action.payload;
    },
  }
});

export default filterSlice.reducer;
export const { filterStatus, searchStatus } = filterSlice.actions;