const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

/**
 * Helper function to handle API responses
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Fetch restaurants based on location and filters
 * @param {string} location 
 * @param {Array} filters 
 * @returns {Promise<Array>} List of restaurants
 */
export const getRestaurants = async (location, filters = []) => {
  const queryParams = new URLSearchParams();
  if (location) queryParams.append('location', location);
  filters.forEach(filter => queryParams.append('dietary', filter));

  try {
    const response = await fetch(`${API_BASE_URL}/restaurants?${queryParams.toString()}`);
    return handleResponse(response);
  } catch (error) {
    // Error is re-thrown to be handled by the calling component
    throw error;
  }
};

/**
 * Authenticate user
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<Object>} User data and token
 */
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  } catch (error) {
    // Error is re-thrown to be handled by the calling component
    throw error;
  }
};
