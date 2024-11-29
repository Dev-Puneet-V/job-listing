import { createSlice } from "@reduxjs/toolkit";

// Initial state with default values
const initialState = {
  user: null, // No user logged in by default
  token: null, // No token stored by default
  status: "idle", // Tracking loading, success, failure states
};

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to log in a user
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = "authenticated";
    },
    // Action to log out a user
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
    },
    // Optional: Action to set status (could be used for loading states)
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { login, logout, setStatus } = authSlice.actions;

export default authSlice.reducer;
