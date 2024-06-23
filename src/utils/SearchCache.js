import { createSlice } from "@reduxjs/toolkit";

const Cache = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export default Cache.reducer;
export const { addToCache } = Cache.actions;
