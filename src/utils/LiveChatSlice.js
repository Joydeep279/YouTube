import { createSlice } from "@reduxjs/toolkit";

const liveChat = createSlice({
  name: "LiveChat",
  initialState: {
    message: [],
  },
  reducers: {
    Insert: (state, action) => {
      state.message.splice(10, 1);
      state.message.unshift(action.payload);
    },
  },
});

export default liveChat.reducer;
export const { Insert } = liveChat.actions;
