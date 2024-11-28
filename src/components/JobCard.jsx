const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{job.title}</h2>
      <p>Type: {job.type}</p>
      <p>Location: {job.location}</p>
      <p>Salary: ${job.salary}</p>
    </div>
  );
};

export default JobCard;
