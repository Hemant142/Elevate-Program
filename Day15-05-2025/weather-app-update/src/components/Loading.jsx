import React from 'react';

const Loading = () => {
  return (
    <div className="weather-card flex flex-col items-center justify-center py-20">
      <div className="animate-pulse-slow">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-75 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-white opacity-70 scale-75"></div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute inset-0 w-24 h-24 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
            />
          </svg>
        </div>
      </div>
      <p className="mt-6 text-xl">Fetching weather data...</p>
      <p className="mt-2 text-white/70">Please wait a moment</p>
    </div>
  );
};

export default Loading;