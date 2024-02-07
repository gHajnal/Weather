import { configureStore } from "@reduxjs/toolkit";

import capitalSlice from "./capitalSlice";
import modalSlice from "./modalSlice";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    capital: capitalSlice.reducer,
    modal: modalSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export const capitalActions = capitalSlice.actions;
export const modalActions = modalSlice.actions;
export const weatherActions = weatherSlice.actions;

export default store;
