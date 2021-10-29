import { configureStore } from "@reduxjs/toolkit";
import sideBarReducers from "./slices/sideBar";
import cartReducers from "./slices/cart";

export default configureStore({
  reducer: {
    sideBar: sideBarReducers,
    cart: cartReducers,
  },
});
