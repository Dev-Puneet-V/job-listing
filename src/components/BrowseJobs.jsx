import { Link, Navigate } from "react-router-dom";

const BrowseJobs = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
      <p className="text-2xl">Welcome back to job search</p>
      <Link
        className="bg-violet-500 text-[#ffffff] hover:bg-violet-600 p-2 rounded-full w-[150px] h[30px] mt-4 font-semibold text-center"
        to="/jobs"
      >
        Search for jobs
      </Link>
    </div>
  );
};

export default BrowseJobs;
