import { configureStore } from "@reduxjs/toolkit";
import sideBarReducers from "./slices/sideBar";
import cartReducers from "./slices/cart";
import sideMenuReducers from "./slices/sideMenu";

export default configureStore({
  reducer: {
    sideBar: sideBarReducers,
    cart: cartReducers,
    sideMenu: sideMenuReducers,
  },
});
