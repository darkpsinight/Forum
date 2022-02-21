import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication : authenticationReducer
  },
});
