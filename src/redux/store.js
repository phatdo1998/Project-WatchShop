import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import informationSlice from "./slices/informationSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    information: informationSlice,
  },
});
