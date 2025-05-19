import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaLocationArrow } from 'react-icons/fa';

const SearchBar = ({ 
  value, 
  onSearch, 
  onInputChange, 
  onLocationSearch, 
  suggestions, 
  showSuggestions, 
  onSuggestionClick 
}) => {
  const [localValue, setLocalValue] = useState(value || '');
  const suggestionsRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        // Close suggestions if clicked outside
        if (showSuggestions) {
          setTimeout(() => onSuggestionClick(localValue), 100);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSuggestions, onSuggestionClick, localValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localValue.trim()) {
      onSearch(localValue);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);
    onInputChange(value);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <input
            type="text"
            value={localValue}
            onChange={handleChange}
            placeholder="Enter city name..."
            className="input-field pr-10"
            aria-label="Search for a city"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
        <button 
          type="button" 
          onClick={onLocationSearch}
          className="btn btn-secondary"
          aria-label="Use current location"
        >
          <FaLocationArrow className="text-white" />
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full bg-white/20 backdrop-blur-lg rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-white/30 transition-colors text-white"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;