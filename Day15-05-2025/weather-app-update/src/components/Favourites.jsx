import React, { useState } from 'react';
import { FaHeart, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Favourites = ({ favourites, onFavouriteClick, onRemoveFromFavourites }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="glass-card overflow-hidden">
      <button 
        className="flex items-center justify-between w-full px-4 py-3 text-white font-medium"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="favourites-list"
      >
        <div className="flex items-center">
          <FaHeart className="text-accent-400 mr-2" />
          <span>Favourites {favourites.length > 0 && `(${favourites.length})`}</span>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      
      <div 
        id="favourites-list"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}
      >
        {favourites.length === 0 ? (
          <div className="px-4 py-3 text-white/70 text-sm border-t border-white/20">
            No favorites saved yet
          </div>
        ) : (
          <ul className="max-h-48 overflow-y-auto">
            {favourites.map((city, index) => (
              <li 
                key={index} 
                className="border-t border-white/20 flex items-center justify-between"
              >
                <button
                  className="flex-grow px-4 py-2 text-left text-white hover:bg-white/10 transition-colors"
                  onClick={() => onFavouriteClick(city)}
                >
                  {city}
                </button>
                <button
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => onRemoveFromFavourites(city)}
                  aria-label={`Remove ${city} from favorites`}
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favourites;