import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // Mock jobs data
  return data.slice(0, 10).map((job, idx) => ({
    id: idx + 1,
    title: job.title,
    location: idx % 2 === 0 ? "Remote" : "On-site",
    salary: 50000 + idx * 5000,
    type: idx % 2 === 0 ? "Full-time" : "Part-time",
  }));
});

// Fetch job by ID (for detailed view)
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return {
      id: data.id,
      title: data.title,
      description: data.body,
      company: "Company XYZ",
      location: +id % 2 === 0 ? "Remote" : "On-site",
      salary: 60000,
    };
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    filteredJobs: [],
    filter: {
      type: "All",
      location: "All",
    },
    sort: "none",
    status: "idle",
    jobDetails: {},
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = {
        ...state.filter,
        [action.payload.name]: action.payload.value,
      };
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    applyFilterAndSort: (state) => {
      let jobs = state.jobs;

      // Filter
      if (state.filter.type !== "All") {
        jobs = jobs.filter((job) => job.type === state.filter.type);
      }
      if (state.filter.location !== "All") {
        jobs = jobs.filter((job) => job.location === state.filter.location);
      }

      // Sort
      if (state.sort === "salary") {
        jobs = jobs.sort((a, b) => b.salary - a.salary);
      }

      state.filteredJobs = jobs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.filteredJobs = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.jobDetails = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setFilter, setSort, applyFilterAndSort } = jobsSlice.actions;

export default jobsSlice.reducer;
