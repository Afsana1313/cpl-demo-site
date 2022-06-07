import { createSlice } from "@reduxjs/toolkit";

export const authCustomSlicer = createSlice({
  name: "login",
  initialState: {
    userEmailID: "",
    phone: ""
  },
  reducers: {
    accept: (state, action) => {
      state.user = action.payload;
    },
    deny: (state) => {
      state.userEmailID = "";
    },
    register: (state, action) => {
      const { email, phone, pw } = action.payload;
      state.userEmailID = email;
      state.phone = phone;
    }
  }
});

// Action creators are generated for each case reducer function
export const { accept, deny, register } = authCustomSlicer.actions;

export default authCustomSlicer.reducer;
