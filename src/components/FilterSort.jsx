import { useDispatch } from "react-redux";
import { setFilter, setSort, applyFilterAndSort } from "../store/jobsSlice";

const FilterSort = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ name: name, value: value }));
    dispatch(applyFilterAndSort());
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
    dispatch(applyFilterAndSort());
  };

  return (
    <div className="flex gap-4 my-4">
      <select name="type" onChange={handleFilterChange} className="p-2">
        <option value="All">All Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>
      <select name="location" onChange={handleFilterChange} className="p-2">
        <option value="All">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
      </select>
      <select onChange={handleSortChange} className="p-2">
        <option value="none">Sort by</option>
        <option value="salary">Salary</option>
      </select>
    </div>
  );
};

export default FilterSort;
