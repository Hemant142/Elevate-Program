import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="weather-card bg-gradient-to-r from-red-700 to-red-500 text-center py-12">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-16 w-16 mx-auto mb-4 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      <h3 className="text-2xl font-bold mb-2">Error</h3>
      <p className="text-white/90 max-w-md mx-auto">
        {message || "Couldn't fetch weather data. Please check the city name and try again."}
      </p>
    </div>
  );
};

export default Error;