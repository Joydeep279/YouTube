import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
console.log("Store Called");
const Store = configureStore({
  reducer: {
    NavBar: NavSlice,
  },
});

export default Store;
