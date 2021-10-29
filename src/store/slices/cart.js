import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const sameItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (sameItemIndex > -1) {
        state.items[sameItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {},
    clearCart: (state) => {
      state.items = [];
    },
    updateItem: (state, action) => {
      const id = action.payload.id;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          ...action.payload,
        };
      }
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
