import { filterStatus } from "../../features/filter/filterSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const { filterText } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (text) => {
    console.log(text);
    dispatch(filterStatus(text));
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => handleFilter('all')} className={`lws-filter-btn ${filterText === 'all' && 'active-filter'} ${filterText === '' && 'active-filter'}`}>All</button>
      <button onClick={() => handleFilter('featured')} className={`lws-filter-btn ${filterText === 'featured' && 'active-filter'}`}>Featured</button>
    </div>
  )
}