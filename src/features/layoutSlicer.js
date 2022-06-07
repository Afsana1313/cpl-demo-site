import { createSlice } from "@reduxjs/toolkit";

export const layoutSlicer = createSlice({
  name: "layout",
  initialState: {
    loginModalOpen: false
  },
  reducers: {
    openLoginModal: (state) => {
      state.loginModalOpen = !state.loginModalOpen;
    }
  }
});

// Action creators are generated for each case reducer function
export const { openLoginModal } = layoutSlicer.actions;

export default layoutSlicer.reducer;
