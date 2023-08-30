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
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    emptyCart: (state) => {
      state = [];
    },
    increasement: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      ));
    },
    decrement: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      ));
    },
  },
});

export const { addToCart, removeToCart, emptyCart, increasement, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
