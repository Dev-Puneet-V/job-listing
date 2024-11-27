import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Job Details</h1>
      <p>Details for Job ID: {id}</p>
    </div>
  );
};
export default JobDetails;
