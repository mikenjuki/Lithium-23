import { createSlice } from "@reduxjs/toolkit";

const initialState: PayoutStore = {
  payouts: [],
  searchResults: [],
  isSearchEmpty: true,
};

const payoutsSlice = createSlice({
  name: "payouts",
  initialState,
  reducers: {
    setPayouts: (state, action) => {
      state.payouts = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setIsSearchEmpty: (state, action) => {
      state.isSearchEmpty = action.payload;
    },
  },
});

export const { setPayouts, setSearchResults, setIsSearchEmpty } = payoutsSlice.actions;
export const payoutsReducer = payoutsSlice.reducer;
