import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";

const Store = configureStore({
  reducer: {
    Navigation: NavSlice,
  },
});

export default Store;
