import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    emptyCart: (state) => {
      state = [];
    },
  },
});

export const { addToCart, removeToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
