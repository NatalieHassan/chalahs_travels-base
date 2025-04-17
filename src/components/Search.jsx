
import { useState } from 'react';


const Search = () => {
  const [location, setLocation] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

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
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId) 
        : [...prev, filterId]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic would go here
  };

  return (
    <div className="search">
      <h2>Find Restaurants</h2>
      <form onSubmit={handleSearch}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
        
        <div className="dietary-filters">
          <h3>Dietary Restrictions</h3>
          <div className="filters-grid">
            {dietaryOptions.map(option => (
              <div key={option.id} className="filter-option">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={selectedFilters.includes(option.id)}
                  onChange={() => handleFilterToggle(option.id)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
// src/components/Search.jsx
