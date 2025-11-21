import {useState} from 'react';
import PropTypes from 'prop-types';


const DietaryFilters = ({onFiltersChange}) => {
  const [filters, setFilters] = useState([]);

  const dietaryOptions = [
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'gluten-free', label: 'Gluten-Free' },
    { id: 'kosher', label: 'Kosher' },
    { id: 'halal', label: 'Halal' },
    { id: 'nut-free', label: 'Nut-Free' },
    { id: 'dairy-free', label: 'Dairy-Free' },
    { id: 'shellfish-free', label: 'Shellfish-Free' },
  ];
  const handleFilterToggle = (filterId) => {
    const updatedFilters = filters.includes(filterId)
      ? filters.filter(id => id !== filterId)
      : [...filters, filterId];
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };
  return (
    <div>
      <h3>Dietary Restrictions</h3>
      <div className="filters-grid">
        {dietaryOptions.map(option => (
          <div key={option.id} className="filter-option">
            <input
              type="checkbox"
              id={option.id}
              checked={filters.includes(option.id)}
              onChange={() => handleFilterToggle(option.id)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

DietaryFilters.propTypes = {
  onFiltersChange: PropTypes.func.isRequired,
};

export default DietaryFilters