import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticationService } from "./authenticationAPI";

const initialState = {
  registerstatus: "",
  errormessage: "",
  loginstatus: "",
};

//asyncthunk actions

//register redux action
export const register = createAsyncThunk("users/register", async (data) => {
  const response = AuthenticationService.register(data);
  return response;
});

//login redux action
export const login = createAsyncThunk("users/login", async (data) => {
  const response = AuthenticationService.login(data);
  return response;
});

//creation du slice
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,

  //reducers homa les actions ki ma nest7a9ich bech njib données mil serveurs walla nsob données mil serveur
  reducers: {},

  //extraReducers houma les actions li bech ycommunicou m3a serveur (backend)
  extraReducers: {

    //register http request 3 cases
    [register.pending]: (state, action) => {
      state.registerstatus = "loading";
    },

    [register.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.status === 200) {
        state.registerstatus = "success";
      }
      else {
        state.registerstatus = "failure";
        state.errormessage = action.payload.response.data.message;
      }
    },

    [register.rejected]: (state, action) => {
      state.registerstatus = "failure";
    },

    
    //login http request 3 cases
    [login.pending]: (state, action) => {
      state.loginstatus = "loading";
    },

    [login.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loginstatus = "success";
    },

    [login.rejected]: (state, action) => {
      state.loginstatus = "failure";
    },

  },
});
export const { } = authenticationSlice.actions;
export const selectRegisterStatus = (state) => state.authentication.registerstatus
export const selectErrorStatus = (state) => state.authentication.errormessage
export const selectLoginStatus = (state) => state.authentication.loginstatus
export default authenticationSlice.reducer;