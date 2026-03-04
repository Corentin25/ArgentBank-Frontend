import { createSlice } from "@reduxjs/toolkit";

const tokenStorage = localStorage.getItem('token');

const initialState = {
  token: tokenStorage || null,
  isAuthenticated: !!tokenStorage,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload);
    },
    setLogout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
