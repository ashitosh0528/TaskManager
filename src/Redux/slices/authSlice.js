import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,

  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut : (state,action)=>{
        state.user= undefined
        localStorage.removeItem("userInfo");
    },
    setSidebarOpen:(state, action)=>{
       state.isSidebarOpen= action.payload
    }
  },
});

 export const {setCredentials,logOut,setSidebarOpen} = authSlice.actions

 export default authSlice.reducer