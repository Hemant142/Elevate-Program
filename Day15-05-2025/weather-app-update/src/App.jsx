import React, { useState, useEffect } from 'react';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl min-h-screen flex flex-col">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Weather App</h1>
        <p className="text-white/80">Get real-time weather updates for any city</p>
      </header>
      
      <main className="flex-grow">
        <WeatherApp />
      </main>
      
      <footer className="mt-8 text-center text-white/60 text-sm py-4">
        <p>© {new Date().getFullYear()} Weather App. Powered by OpenWeatherMap API</p>
      </footer>
    </div>
  );
}

export default App;