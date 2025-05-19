import debounce from 'lodash.debounce';

// This is a simple array of popular cities for demonstration
// In a production app, you'd integrate with a more comprehensive city API
const POPULAR_CITIES = [
  'London', 'New York', 'Tokyo', 'Paris', 'Berlin', 'Sydney', 'Dubai',
  'Barcelona', 'Rome', 'Amsterdam', 'Athens', 'Beijing', 'Cairo', 'Cape Town',
  'Chicago', 'Hong Kong', 'Istanbul', 'Jakarta', 'Kiev', 'Lagos', 'Las Vegas',
  'Los Angeles', 'Madrid', 'Miami', 'Montreal', 'Moscow', 'Mumbai', 'San Francisco',
  'San Diego', 'Sao Paulo', 'Seoul', 'Shanghai', 'Singapore', 'Stockholm', 
  'Toronto', 'Vancouver', 'Vienna', 'Zurich', 'Copenhagen', 'Bangkok',
  'Edinburgh', 'Helsinki', 'Lisbon', 'Melbourne', 'Munich', 'Oslo', 'Prague', 
  'Rio de Janeiro', 'Warsaw', 'Washington D.C.'
];

// Simple function to filter cities based on input
const filterCities = (query) => {
  const lowerQuery = query.toLowerCase().trim();
  return POPULAR_CITIES
    .filter(city => city.toLowerCase().includes(lowerQuery))
    .slice(0, 5); // Limit to 5 suggestions
};

// Debounced function to avoid unnecessary processing
export const getCitySuggestions = debounce(async (query) => {
  if (!query || query.length < 2) return [];
  
  // In a real app, you might want to fetch from an API instead
  // For example: return await fetchFromCityAPI(query);
  
  return filterCities(query);
}, 300);

// You could implement a real API call like this:
/*
const fetchFromCityAPI = async (query) => {
  try {
    const response = await fetch(
      `https://api.example.com/cities?q=${encodeURIComponent(query)}&limit=5`
    );
    const data = await response.json();
    return data.cities.map(city => city.name);
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
    return [];
  }
};
*/