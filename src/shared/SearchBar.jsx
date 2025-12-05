import React, { useState } from 'react';
import './FormStyles.css';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only trigger search if location has at least 3 characters (saves API calls)
    if (location.trim().length >= 3) {
      onSearch(location.trim());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;