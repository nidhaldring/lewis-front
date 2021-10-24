import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sideBarSlice.actions;

export default sideBarSlice.reducer;
