import { useDispatch, useSelector } from "react-redux";
import { addInWishList, removeFromWishList } from "../store/wishlistSlice";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const { wishlistJobs } = useSelector((state) => state.wishListJobs);
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Location: {job.location}</p>
      <p>Salary: ${job.salary}</p>
      <div className="flex gap-4">
        {!wishlistJobs.some((currJob) => currJob.id === job.id) && (
          <button
            className="bg-green-500 text-[#ffffff] hover:bg-green-600 p-2 rounded-full w-[150px] mt-4 font-semibold"
            onClick={() => {
              dispatch(addInWishList(job));
            }}
          >
            Add to wishlist +
          </button>
        )}
        {wishlistJobs.some((currJob) => currJob.id === job.id) && (
          <button
            className="bg-red-500 text-[#ffffff] hover:bg-red-600 p-2 rounded-full w-[220px] mt-4 font-semibold"
            onClick={() => dispatch(removeFromWishList(job))}
          >
            Remove from wishlist -
          </button>
        )}

        <Link
          to={`/jobs/${job.id}`}
          className="mt-[20px] bg-green-500 text-[#ffffff] hover:bg-green-600 p-2 rounded-full w-[150px] mt-4 font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
