import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    wishlistJobs: [],
  },
  reducers: {
    addInWishList: (state, action) => {
      const jobExists = state.wishlistJobs.some(
        (job) => job.id === action.payload.id
      );

      if (!jobExists) {
        state.wishlistJobs = [...state.wishlistJobs, action.payload];
      }
    },
    removeFromWishList: (state, action) => {
      state.wishlistJobs = state.wishlistJobs.filter(
        (data) => data.id !== action.payload.id
      );
    },
  },
});

export const { addInWishList, removeFromWishList } = jobsSlice.actions;

export default jobsSlice.reducer;
