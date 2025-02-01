'use client';

import { useState } from 'react';

interface Suggestion {
  display_name: string;
}

const LocationForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSuggestions = async (query: string): Promise<void> => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}, Finland&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
    setIsLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setSearchTerm(input);
    fetchSuggestions(input);
  };

  const handleSuggestionClick = (suggestion: Suggestion): void => {
    setSearchTerm(suggestion.display_name);
    setSuggestions([]); // Clear suggestions after selecting
  };

  return (
      <div className="relative flex flex-col">
        <label htmlFor="location" className="text-sm font-semibold">
          Sijainti
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={searchTerm}
          onChange={handleInputChange}
          className="mt-2 p-2 border border-gray-300 text-black rounded-lg w-full"
          placeholder="Esim. Helsinki, Tampere"
          required
        />
        
        {suggestions.length > 0 && (
          <ul className="absolute mt-1 w-full max-h-64 overflow-y-auto border border-gray-300 bg-white text-black rounded-lg shadow-lg z-10 top-full left-0">
            {isLoading && <li className="px-4 py-2">Loading...</li>}
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default LocationForm;