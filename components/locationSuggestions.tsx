'use client';

import { useState } from 'react';

const finnishCities = [
  'Espoo', 'Hämeenlinna', 'Helsinki', 'Joensuu', 'Jyväskylä', 'Kouvola', 'Kuopio',
  'Lahti', 'Lappeenranta', 'Mikkeli', 'Oulu', 'Pori', 'Rovaniemi', 'Seinäjoki',
  'Tampere', 'Turku', 'Vaasa', 'Vantaa'
].sort();

const LocationForm = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <div className="flex flex-col">
      <label htmlFor="location" className="text-sm font-semibold">
        Sijainti
      </label>
      <select
        id="location"
        name="location"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="mt-2 p-2 border border-gray-300 text-black rounded-lg w-full bg-white"
        required
      >
        <option value="" disabled>Valitse kaupunki</option>
        {finnishCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationForm;