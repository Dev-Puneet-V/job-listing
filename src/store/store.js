import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import wishListJobsReducer from "./wishlistSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    wishListJobs: wishListJobsReducer,
    auth: authReducer,
  },
});

export default store;
