import { createSlice } from "@reduxjs/toolkit";
console.log("NavSlice Called");
const NavSlice = createSlice({
  name: "NavBar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export default NavSlice.reducer;
export const { toggleMenu } = NavSlice.actions;
