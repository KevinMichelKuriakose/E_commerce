
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
    },

  },
});

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
