import { useSelector } from "react-redux";
import JobCard from "./JobCard";

const WishList = () => {
  const { wishlistJobs } = useSelector((state) => state.wishListJobs);
  return (
    <>
      {wishlistJobs?.map((job, key) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </>
  );
};

export default WishList;
