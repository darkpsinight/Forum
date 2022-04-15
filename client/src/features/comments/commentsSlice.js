import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentsService } from "./commentsAPI";

const initialState = {
    
};



//asyncthunk actions

//Create redux action
export const createComment = createAsyncThunk(
    "comments/create",
    async (data) => {
        const response = CommentsService.create(data)
        return response
    }
)



//creation du slice
const commentsSlice = createSlice({
    name: "comments",
    initialState,

    //reducers homa les actions ki ma nest7a9ich bech njib données mil serveurs walla nsob données mil serveur
    reducers: {},

    //extraReducers houma les actions li bech ycommunicou m3a serveur (backend)
    extraReducers: {

        //Create http request 3 cases
        [createComment.pending]: (state, action) => {

        },

        [createComment.fulfilled]: (state, action) => {
            console.log(action.payload);
            //state.createdCommentsocket = action.payload.data.data
        },

        [createComment.rejected]: (state, action) => {

        },

    },
});
export const { } = commentsSlice.actions;

//export const selectComments = (state) => state.posts

export default commentsSlice.reducer;