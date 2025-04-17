import {useState} from 'react';


const DietaryFilters = ({onFiltersChange}) => {
  const [filters, setFilters] = useState([])

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
    setFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId) 
        : [...prev, filterId]
    );
    onFiltersChange(filters)
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

export default DietaryFilters