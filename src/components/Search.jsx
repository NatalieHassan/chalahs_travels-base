import { useState, useEffect } from 'react';
import SearchBar from '../shared/SearchBar';
import DietaryFilters from '../shared/DietaryFilters';
import { searchRestaurants } from '../services/googlePlaces';
import './Search.css';

const Search = () => {
  const [location, setLocation] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      // Don't search if no location is provided
      if (!location || location.trim() === '') {
        setRestaurants([]);
        setError(null);
        return;
      }

      // Prevent API call if location is too short (saves API calls)
      if (location.trim().length < 3) {
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const data = await searchRestaurants(location, selectedFilters);
        setRestaurants(data);
        if (data.length === 0 && location) {
          setError(null); // Clear error if it's just no results
        }
      } catch (err) {
        // Show the actual error message for debugging
        const errorMessage = err.message || 'Failed to fetch restaurants. Please try again.';
        setError(errorMessage);
        setRestaurants([]);
        console.error('Search error details:', err);
      } finally {
        setLoading(false);
      }
    };

    // Increased debounce to 1000ms (1 second) to reduce API calls during typing
    const debounceTimer = setTimeout(() => {
      fetchRestaurants();
    }, 1000); // Increased from 500ms to save API calls

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

      {loading && <p className="loading">Searching for restaurants...</p>}
      {error && <p className="error">{error}</p>}

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <h3>{restaurant.name}</h3>
              {restaurant.rating && (
                <p className="rating">⭐ {restaurant.rating.toFixed(1)}</p>
              )}
              {restaurant.cuisine && <p className="cuisine">{restaurant.cuisine}</p>}
              <p className="address">{restaurant.address}</p>
              {restaurant.photos && restaurant.photos.length > 0 && (
                <img 
                  src={restaurant.photos[0]} 
                  alt={restaurant.name}
                  className="restaurant-photo"
                  loading="lazy"
                />
              )}
            </div>
          ))
        ) : (
          !loading && location && <p className="no-results">No restaurants found. Try a different location or adjust your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

