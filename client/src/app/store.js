import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "../features/authentication/authenticationSlice"
import postsReducer from "../features/posts/postsSlice"
import commentsReducer from "../features/comments/commentsSlice"

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    posts: postsReducer,
    comments: commentsReducer
  },
});