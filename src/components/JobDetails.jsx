import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addInWishList, removeFromWishList } from "../store/wishlistSlice";
import { fetchJobById } from "../store/jobsSlice";
import { useEffect } from "react";

const jobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobDetails, status } = useSelector((state) => state.jobs);
  const { wishlistJobs } = useSelector((state) => state.wishListJobs);
  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [dispatch, id]);
  return (
    <>
      {status === "succeeded" && (
        <div className="border p-4 rounded shadow">
          <h2 className="font-bold">{jobDetails?.title}</h2>
          <p>Type: {jobDetails?.location}</p>
          <p>Location: {jobDetails?.location}</p>
          <p>Salary: ${jobDetails?.salary}</p>
          <div className="flex gap-4">
            {!wishlistJobs?.some(
              (currJob) => currJob.id === jobDetails?.id
            ) && (
              <button
                className="bg-green-500 text-[#ffffff] hover:bg-green-600 p-2 rounded-full w-[150px] mt-4 font-semibold"
                onClick={() => {
                  dispatch(addInWishList(jobDetails));
                }}
              >
                Add to wishlist +
              </button>
            )}
            {wishlistJobs?.some((currJob) => currJob.id === jobDetails?.id) && (
              <button
                className="bg-red-500 text-[#ffffff] hover:bg-red-600 p-2 rounded-full w-[220px] mt-4 font-semibold"
                onClick={() => dispatch(removeFromWishList(jobDetails))}
              >
                Remove from wishlist -
              </button>
            )}
          </div>
        </div>
      )}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed...</p>}
    </>
  );
};
export default jobDetails;
