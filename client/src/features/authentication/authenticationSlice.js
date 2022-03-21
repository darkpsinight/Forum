import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthenticationService } from "./authenticationAPI";

const initialState = {
  registerstatus: "",
  errormessage: "",
  userDetails: null,
};



//asyncthunk actions

//register redux action
export const register = createAsyncThunk(
  "users/register",
  async (data) => {
    const response = AuthenticationService.register(data);
    return response;
  }
);

//login redux action
export const login = createAsyncThunk(
  "users/login",
  async (data) => {
    const response = AuthenticationService.login(data);
    return response;
  }
);

//logout redux action
export const logout = createAsyncThunk(
  "users/logout",
  async () => {
    const response = AuthenticationService.logout();
    return response;
  }
);

//getme redux action
export const getMe = createAsyncThunk(
  "users/me",
  async () => {
    const response = AuthenticationService.getMe();
    return response;
  }
);



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
      state.loginstatus = "success";
      console.log(action.payload);

      if (action.payload.status === 200) {
        window.location.href = '/posts'
      }

    },

    [login.rejected]: (state, action) => {
      state.loginstatus = "failure";
    },


    //logout http request 3 cases
    [logout.pending]: (state, action) => {
      
    },

    [logout.fulfilled]: (state, action) => {
      
      window.location.href = '/login'
    },

    [logout.rejected]: (state, action) => {
      
    },


    //getMe http request 3 cases
    [getMe.pending]: (state, action) => {

    },
    [getMe.fulfilled]: (state, action) => {
        console.log(action.payload);
        state.userDetails = action.payload.data.data
    },
    [getMe.rejected]: (state, action) => {

    },

  },

});
export const { } = authenticationSlice.actions;
export const selectRegisterStatus = (state) => state.authentication.registerstatus
export const selectErrorStatus = (state) => state.authentication.errormessage
export const selectUserDetails = (state) => state.authentication.userDetails
export default authenticationSlice.reducer;