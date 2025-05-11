import { useState, useEffect } from 'react';
import SearchBar from '../shared/SearchBar';
import DietaryFilters from '../shared/DietaryFilters';
import './Search.css';

const Search = () => {
  const [location, setLocation] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    if (location || selectedFilters.length) {
      console.log(`Searching for restaurants in ${location} with filters: ${selectedFilters.join(', ')}`);
    }
  }, [location, selectedFilters]);

  const handleSearch = (searchTerm) => {
    setLocation(searchTerm);
  };

  const handleFiltersChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="search">
      <h2>Find Restaurants</h2>
      <SearchBar onSearch={handleSearch} />
      <DietaryFilters onFiltersChange={handleFiltersChange} />
    </div>
  );
};

export default Search;

