import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostsService } from "./postsAPI";

const initialState = {
    posts: []
};



//asyncthunk actions

//Create redux action
export const createPost = createAsyncThunk(
    "posts/create",
    async (data) => {
        const response = PostsService.create(data);
        return response;
    }
);

//Get all posts redux action
export const getPosts = createAsyncThunk(
    "posts/getall",
    async () => {
        const response = PostsService.getPosts();
        return response;
    }
);



//creation du slice
const postsSlice = createSlice({
    name: "posts",
    initialState,

    //reducers homa les actions ki ma nest7a9ich bech njib données mil serveurs walla nsob données mil serveur
    reducers: {},

    //extraReducers houma les actions li bech ycommunicou m3a serveur (backend)
    extraReducers: {

        //Create http request 3 cases
        [createPost.pending]: (state, action) => {

        },

        [createPost.fulfilled]: (state, action) => {
            console.log(action.payload);
        },

        [createPost.rejected]: (state, action) => {
            
        },


        //getall http request 3 cases
        [getPosts.pending]: (state, action) => {

        },

        [getPosts.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.posts = action.payload.data.data
        },

        [getPosts.rejected]: (state, action) => {
            
        },

    },
});
export const { } = postsSlice.actions;

export const selectPosts = (state) => state.posts

export default postsSlice.reducer;