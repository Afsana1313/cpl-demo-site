import { configureStore } from "@reduxjs/toolkit";
import authCustomSlicer from "./authCustomSlicer";
import layoutSlicer from "./layoutSlicer";

export default configureStore({
  reducer: {
    auth: authCustomSlicer,
    layout: layoutSlicer
  }
});
