// store.js
import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./redux/seatSlice";

const store = configureStore({
  reducer: {
    seatReducer,
  },
});

export default store;
