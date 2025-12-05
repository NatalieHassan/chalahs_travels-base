/**
 * Google Places API Service
 * Handles restaurant searches using Google Places API
 * Version: 2.2 - Final cache fix
 */

const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

// Debug logging (remove in production if needed)
console.log('Google Places API Key loaded:', GOOGLE_PLACES_API_KEY ? 'YES (hidden)' : 'NO - NOT FOUND');

if (!GOOGLE_PLACES_API_KEY) {
  console.error('❌ Google Places API key is not set. Please add VITE_GOOGLE_PLACES_API_KEY to your environment variables.');
  console.error('Current env vars:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
}

/**
 * Search for restaurants using Google Places API
 * @param {string} location - The location to search (e.g., "New York, NY" or "90210")
 * @param {Array<string>} dietaryFilters - Array of dietary restrictions (e.g., ["vegetarian", "vegan"])
 * @returns {Promise<Array>} Array of restaurant objects
 */
export const searchRestaurants = async (location, dietaryFilters = []) => {
  if (!GOOGLE_PLACES_API_KEY) {
    throw new Error('Google Places API key is not configured. Please contact support.');
  }

  if (!location || location.trim() === '') {
    throw new Error('Please enter a location to search.');
  }

  try {
    // Build the query with dietary restrictions
    let query = `restaurants in ${location}`;
    
    // Add dietary restrictions to the query
    if (dietaryFilters.length > 0) {
      const dietaryTerms = dietaryFilters.map(filter => {
        // Map internal filter IDs to search-friendly terms
        const termMap = {
          'vegetarian': 'vegetarian',
          'vegan': 'vegan',
          'gluten-free': 'gluten free',
          'kosher': 'kosher',
          'halal': 'halal',
          'nut-free': 'nut free',
          'dairy-free': 'dairy free',
          'shellfish-free': 'shellfish free'
        };
        return termMap[filter] || filter;
      });
      query += ` ${dietaryTerms.join(' ')}`;
    }

    // Use Places API Text Search
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&type=restaurant&key=${GOOGLE_PLACES_API_KEY}`;
    
    console.log('Calling Google Places API:', apiUrl.replace(GOOGLE_PLACES_API_KEY, 'API_KEY_HIDDEN'));
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response Error:', response.status, errorText);
      throw new Error(`Google Places API HTTP error: ${response.status}. ${errorText.substring(0, 200)}`);
    }

    const data = await response.json();
    
    console.log('Google Places API Response:', { status: data.status, resultsCount: data.results?.length || 0 });

    if (data.status === 'REQUEST_DENIED') {
      const errorMsg = data.error_message || 'API request denied';
      console.error('API Request Denied:', errorMsg);
      throw new Error(`Google Places API request denied: ${errorMsg}. Please check your API key configuration and restrictions in Google Cloud Console.`);
    }

    if (data.status === 'OVER_QUERY_LIMIT') {
      throw new Error('Google Places API quota exceeded. Please try again later or check your billing in Google Cloud Console.');
    }

    if (data.status === 'INVALID_REQUEST') {
      const errorMsg = data.error_message || 'Invalid request';
      throw new Error(`Invalid request: ${errorMsg}`);
    }

    if (data.status === 'ZERO_RESULTS') {
      return [];
    }

    if (data.status !== 'OK') {
      const errorMsg = data.error_message || `Status: ${data.status}`;
      throw new Error(`Google Places API error: ${data.status}. ${errorMsg}`);
    }

    // Transform Google Places results to our format
    return data.results.map((place, index) => ({
      id: place.place_id || `place-${index}`,
      name: place.name,
      address: place.formatted_address || place.vicinity,
      rating: place.rating,
      priceLevel: place.price_level,
      cuisine: place.types?.find(type => type.startsWith('restaurant')) || 'Restaurant',
      location: {
        lat: place.geometry?.location?.lat,
        lng: place.geometry?.location?.lng
      },
      placeId: place.place_id,
      photos: place.photos?.map(photo => 
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${GOOGLE_PLACES_API_KEY}`
      ) || []
    }));
  } catch (error) {
    console.error('Error searching restaurants:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific restaurant
 * @param {string} placeId - Google Places place_id
 * @returns {Promise<Object>} Detailed restaurant information
 */
export const getRestaurantDetails = async (placeId) => {
  if (!GOOGLE_PLACES_API_KEY) {
    throw new Error('Google Places API key is not configured.');
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,website,rating,price_level,opening_hours,photos,reviews&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    return data.result;
  } catch (error) {
    console.error('Error fetching restaurant details:', error);
    throw error;
  }
};

