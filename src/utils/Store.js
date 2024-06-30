import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchCache from "./SearchCache";
import liveChat from "./LiveChatSlice";
const Store = configureStore({
  reducer: {
    NavBar: NavSlice,
    SearchData: SearchCache,
    LiveChat: liveChat,
  },
});

export default Store;
