import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostsService } from "./postsAPI";

const initialState = {
    posts: [],

    //new created and saved post in database to emit it into the socket server
    createdPostsocket: null
};



//asyncthunk actions

//Create redux action
export const createPost = createAsyncThunk(
    "posts/create",
    async (data) => {
        const response = PostsService.create(data)
        return response
    }
)

//Get all posts redux action
export const getPosts = createAsyncThunk(
    "posts/getall",
    async () => {
        const response = PostsService.getPosts()
        return response
    }
)

//Get my posts redux action
export const getMyPosts = createAsyncThunk(
    "posts/myposts",
    async () => {
        const response = PostsService.getMyPosts()
        return response
    }
)



//creation du slice
const postsSlice = createSlice({
    name: "posts",
    initialState,

    //reducers homa les actions ki ma nest7a9ich bech njib données mil serveurs walla nsob données mil serveur
    reducers: {
        pushpost: (state, action) => {
            state.posts.push(action.payload.post)
        },
        refreshPost: (state, action) => {
            let pos
            let arr = [...state.posts]
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element._id === action.payload.post._id)
                    arr[i] = action.payload.post
            }
            state.posts = arr
        }
    },

    //extraReducers houma les actions li bech ycommunicou m3a serveur (backend)
    extraReducers: {

        //Create http request 3 cases
        [createPost.pending]: (state, action) => {

        },

        [createPost.fulfilled]: (state, action) => {
            console.log(action.payload);
            /* window.location.reload(false); */  //if enabled, socket will always returns data as a null value
            state.createdPostsocket = action.payload.data.data
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

        //getMyPosts http request 3 cases
        [getMyPosts.pending]: (state, action) => {

        },

        [getMyPosts.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.posts = action.payload.data.data
        },

        [getMyPosts.rejected]: (state, action) => {

        },

    },
});
export const { pushpost, refreshPost } = postsSlice.actions;

export const selectPosts = (state) => state.posts

export default postsSlice.reducer;