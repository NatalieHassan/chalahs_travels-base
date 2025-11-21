import { useState, useEffect } from 'react';
import SearchBar from '../shared/SearchBar';
import DietaryFilters from '../shared/DietaryFilters';
import { getRestaurants } from '../services/api';
import './Search.css';

const Search = () => {
  const [location, setLocation] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!location && selectedFilters.length === 0) return;

      setLoading(true);
      setError(null);
      try {
        const data = await getRestaurants(location, selectedFilters);
        setRestaurants(data);
      } catch {
        setError('Failed to fetch restaurants. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchRestaurants();
    }, 500); // Debounce API calls

    return () => clearTimeout(debounceTimer);
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

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
              <p>{restaurant.address}</p>
            </div>
          ))
        ) : (
          !loading && (location || selectedFilters.length > 0) && <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

