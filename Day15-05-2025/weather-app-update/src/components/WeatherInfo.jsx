import React from 'react';
import { FaHeart, FaRegHeart, FaTemperatureHigh, FaWind, FaTint } from 'react-icons/fa';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiDust } from 'react-icons/wi';

const WeatherInfo = ({ weather, onAddToFavourites, isFavourite }) => {
  // Map weather condition to icon
  const getWeatherIcon = (condition) => {
    const code = condition?.id;
    
    if (!code) return <WiDaySunny size={64} />;
    
    // Based on OpenWeatherMap condition codes
    if (code >= 200 && code < 300) return <WiThunderstorm size={64} />;
    if (code >= 300 && code < 600) return <WiRain size={64} />;
    if (code >= 600 && code < 700) return <WiSnow size={64} />;
    if (code >= 700 && code < 800) return <WiFog size={64} />;
    if (code === 800) return <WiDaySunny size={64} />;
    if (code > 800) return <WiCloudy size={64} />;
    
    return <WiDaySunny size={64} />; // Default
  };

  // Background class based on temp
  const getTempClass = (temp) => {
    if (temp < 0) return 'from-blue-900 to-blue-700'; // Very cold
    if (temp < 10) return 'from-blue-800 to-blue-600'; // Cold
    if (temp < 20) return 'from-blue-700 to-blue-500'; // Cool
    if (temp < 30) return 'from-orange-600 to-yellow-500'; // Warm
    return 'from-red-600 to-orange-500'; // Hot
  };

  if (!weather) return null;

  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={`weather-card overflow-hidden bg-gradient-to-r ${getTempClass(weather.main.temp)}`}>
      <div className="absolute top-0 right-0 m-4">
        <button 
          onClick={onAddToFavourites}
          className="text-white hover:text-accent-300 transition-colors"
          aria-label={isFavourite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavourite ? <FaHeart size={24} className="text-accent-300" /> : <FaRegHeart size={24} />}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-3xl font-bold mb-1">{weather.name}, {weather.sys.country}</h2>
          <p className="opacity-80 mb-4">{formattedDate} | {formattedTime}</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="flex items-center justify-center">
              {getWeatherIcon(weather.weather[0])}
            </div>
            <div>
              <p className="text-5xl font-bold">{Math.round(weather.main.temp)}°C</p>
              <p className="text-xl capitalize">{weather.weather[0].description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-auto">
          <div className="flex flex-col items-center bg-white/10 rounded-lg p-3">
            <FaTemperatureHigh size={24} className="mb-2" />
            <p className="text-sm opacity-80">Feels Like</p>
            <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
          </div>
          
          <div className="flex flex-col items-center bg-white/10 rounded-lg p-3">
            <FaTint size={24} className="mb-2" />
            <p className="text-sm opacity-80">Humidity</p>
            <p className="font-bold">{weather.main.humidity}%</p>
          </div>
          
          <div className="flex flex-col items-center bg-white/10 rounded-lg p-3">
            <FaWind size={24} className="mb-2" />
            <p className="text-sm opacity-80">Wind</p>
            <p className="font-bold">{Math.round(weather.wind.speed)} m/s</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <p className="text-sm opacity-80">Pressure</p>
          <p className="font-medium">{weather.main.pressure} hPa</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <p className="text-sm opacity-80">Visibility</p>
          <p className="font-medium">{(weather.visibility / 1000).toFixed(1)} km</p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <p className="text-sm opacity-80">Sunrise</p>
          <p className="font-medium">
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <p className="text-sm opacity-80">Sunset</p>
          <p className="font-medium">
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;