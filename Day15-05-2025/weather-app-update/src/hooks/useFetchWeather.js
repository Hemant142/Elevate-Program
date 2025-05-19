import { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your OpenWeatherMap API key
const API_KEY = "4a0b15d355fa31f7236f8c7d2c3b23fe"; // This is a sample key - replace with your own

const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city || typeof city !== 'string' || !city.trim()) return;
      // Sanitize city name: use only the first word and capitalize
      let trimmedCity = city.trim();
      console.log("trimmedCity",trimmedCity)
      if (!trimmedCity.includes('lat=') && !trimmedCity.includes('lon=')) {
        trimmedCity = trimmedCity.split(' ')[0];
        trimmedCity = trimmedCity.charAt(0).toUpperCase() + trimmedCity.slice(1).toLowerCase();
      }
      setIsLoading(true);
      setError(null);
      try {
        let response;
        // Check if we're using coordinates or city name
        if (trimmedCity.includes('lat=') && trimmedCity.includes('lon=')) {
          const params = new URLSearchParams(trimmedCity);
          const lat = params.get('lat');
          const lon = params.get('lon');
          response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
              params: {
                lat,
                lon,
                appid: API_KEY,
                units: "metric",
              },
            }
          );
        } else {
          console.log("city",trimmedCity)
          response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: API_KEY,
              units: "metric",
            },
          });
        }
        setData(response.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError(`City "${city}" not found. Please check the spelling and try again.`);
        } else {
          setError(err.message || 'An error occurred while fetching weather data.');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
};

export default useFetchWeather;