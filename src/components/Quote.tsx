import React from 'react';

const Quote = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center text-white">
      <button
        className="w-8 h-8 bg-cover bg-center bg-[url('./images/reload.svg')] hover:opacity-80 duration-500"
        type="button"
      ></button>
      <h2 className="text-2xl md:text-4xl">quote</h2>
      <p className="text-xl md:text-2xl">author</p>
    </div>
  );
};

export default Quote;
