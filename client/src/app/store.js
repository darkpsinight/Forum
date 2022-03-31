import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationSlice";
import postsReducer from "../features/posts/postsSlice"

export const store = configureStore({
  reducer: {
    authentication : authenticationReducer,
    posts: postsReducer,
  },
});