import { createSlice } from "@reduxjs/toolkit";

const tokenStorage = localStorage.getItem("token");

const initialState = {
  token: tokenStorage || null,
  isAuthenticated: Boolean(tokenStorage),
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    setProfile: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setLogin, setProfile, setLogout } = authSlice.actions;
export default authSlice.reducer;
