import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import payoutDataApi from "./apis/payoutDataApi";
import {
  payoutsReducer,
  setPayouts,
  setSearchResults,
  setIsSearchEmpty,
} from "./slices/payoutSlice";

const rootReducer = combineReducers({
  [payoutDataApi.reducerPath]: payoutDataApi.reducer,
  payouts: payoutsReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(payoutDataApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchDataQuery, useSearchDataMutation } from "./apis/payoutDataApi";
export { setPayouts, setSearchResults, setIsSearchEmpty };
