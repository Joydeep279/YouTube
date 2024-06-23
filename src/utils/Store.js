import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchCache from "./SearchCache";
const Store = configureStore({
  reducer: {
    NavBar: NavSlice,
    SearchData: SearchCache,
  },
});

export default Store;
