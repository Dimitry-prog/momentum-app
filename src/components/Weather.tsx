import React from 'react';
import pause from '../images/pause.svg';

const Weather = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <input
        type="text"
        placeholder="Enter city"
        className="text-lg p-1 outline-none bg-transparent border-b border-white"
      />
      <img src={pause} alt="weather" className="w-8 h-8 object-cover" />
      <div className="flex flex-col gap-2">some data</div>
    </div>
  );
};

export default Weather;
