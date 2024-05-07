import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductDetailSlice";

export const store = configureStore({
  reducer: {
    feature: productReducer,
  },
});
