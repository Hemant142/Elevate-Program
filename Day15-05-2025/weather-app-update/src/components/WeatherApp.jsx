import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import Error from './Error';
import Favourites from './Favourites';
import useFetchWeather from '../hooks/useFetchWeather';
import useCurrentLocation from '../hooks/useCurrentLocation';
import { getCitySuggestions } from '../utils/getCitySuggestions';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(city,"city")
  const { data, isLoading, error } = useFetchWeather(city);
  const { 
    location: currentLocation, 
    error: locationError, 
    isLoading: locationLoading,
    getLocation 
  } = useCurrentLocation();

  // Load favourites from localStorage on component mount
  useEffect(() => {
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      setFavourites(JSON.parse(savedFavourites));
    }
  }, []);

  // Save favourites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  // Effect for fetching weather by current location
  useEffect(() => {
    if (currentLocation) {
      setCity(`lat=${currentLocation.lat}&lon=${currentLocation.lon}`);
    }
  }, [currentLocation]);

  // Effect for fetching city suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim() && searchQuery.length > 2) {
        const cityResults = await getCitySuggestions(searchQuery);
        setSuggestions(cityResults);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSearch = (searchTerm) => {
    console.log("searchTerm",searchTerm)
    setCity(searchTerm);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleInputChange = (value) => {
    setSearchQuery(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleAddToFavourites = () => {
    if (data && !favourites.includes(data.name)) {
      setFavourites([...favourites, data.name]);
    }
  };

  const handleRemoveFromFavourites = (cityName) => {
    setFavourites(favourites.filter(fav => fav !== cityName));
  };

  const handleFavouriteClick = (cityName) => {
    setCity(cityName);
  };

  const handleLocationSearch = () => {
    getLocation();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <SearchBar 
            value={searchQuery}
            onSearch={handleSearch}
            onInputChange={handleInputChange}
            onLocationSearch={handleLocationSearch}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
        <div className="w-full md:w-auto">
          <Favourites 
            favourites={favourites} 
            onFavouriteClick={handleFavouriteClick}
            onRemoveFromFavourites={handleRemoveFromFavourites} 
          />
        </div>
      </div>

      <div className="weather-display">
        {isLoading || locationLoading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : locationError ? (
          <Error message={locationError} />
        ) : data ? (
          <div className="flex flex-col gap-4">
            <WeatherInfo weather={data} onAddToFavourites={handleAddToFavourites} isFavourite={favourites.includes(data.name)} />
          </div>
        ) : (
          <div className="weather-card text-center py-16">
            <p className="text-xl">Enter a city name to get weather information</p>
            <p className="mt-2 text-white/70">or use your current location</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;