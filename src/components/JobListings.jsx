import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobsSlice";
import JobCard from "./JobCard";
import FilterSort from "./FilterSort";

const JobListings = () => {
  const dispatch = useDispatch();
  const { filteredJobs, status } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (status === "loading") return <p>Loading jobs...</p>;
  if (status === "failed") return <p>Failed to fetch jobs.</p>;
  return (
  <div className="container mx-auto">
    <h1 className="text-2xl font-bold text-center my-4">Job Listings</h1>
    <div className="p-4">
      <FilterSort />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default JobListings;
