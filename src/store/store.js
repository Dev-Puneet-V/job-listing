import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import wishListJobsReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    wishListJobs: wishListJobsReducer,
  },
});

export default store;
