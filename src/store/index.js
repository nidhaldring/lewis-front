import { configureStore } from "@reduxjs/toolkit";
import sideBarReducers from "./slices/sideBar";

export default configureStore({
  reducer: {
    sideBar: sideBarReducers,
  },
});
