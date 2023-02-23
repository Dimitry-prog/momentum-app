import React from 'react';

const Timelapse = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center text-white">
      <div className="text-6xl md:text-8xl">time</div>
      <div className="text-4xl md:text-6xl">date</div>
      <div className="grid grid-cols-2 gap-1">
        <h1 className="text-2xl md:text-4xl text-right">grettings</h1>
        <input
          type="text"
          placeholder="Enter name"
          className="text-2xl md:text-4xl outline-none bg-transparent placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default Timelapse;
