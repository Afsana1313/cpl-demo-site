import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../util/function";
export const authCustomSlicer = createSlice({
  name: "login",
  initialState: {
    userEmailID: "",
    phone: "",
    userId: ""
  },
  reducers: {
    accept: (state, action) => {
      let { userId, phone } = getUserInfo(action.payload);
      state.userEmailID = action.payload;
      state.phone = phone;
      state.userId = userId;
    },
    deny: (state) => {
      state.userEmailID = "";
    },
    register: (state, action) => {
      const { email, phone, userId } = action.payload;
      state.userEmailID = email;
      state.phone = phone;
      state.userId = userId;
    },
    logout: (state) => {
      state.userEmailID = "";
      state.phone = "";
      state.userId = "";
    }
  }
});

// Action creators are generated for each case reducer function
export const { accept, deny, register, logout } = authCustomSlicer.actions;

export default authCustomSlicer.reducer;
