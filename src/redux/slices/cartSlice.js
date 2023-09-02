import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.length === 0) {
        state.push(action.payload);
      } else {
        if (state.findIndex((item) => item.id === action.payload.id) === -1) {
          state.push(action.payload);
        } else {
          return state.map((item) => {
            return item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item;
          });
        }
      }
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
        item.id === action.payload
          ? { ...item, qty: item.qty === 0 ? (item.qty = 0) : item.qty - 1 }
          : item
      ));
    },
    totalCartPrice: (state, action) => {
      return (state = state.map((item) =>
        item.id === action.payload
          ? { ...item, cartPriceTotal: item.price * item.qty }
          : item
      ));
    },
  },
});

export const {
  addToCart,
  removeToCart,
  emptyCart,
  increasement,
  decrement,
  totalCartPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
