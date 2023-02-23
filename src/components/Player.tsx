import React from 'react';

const Player = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-2 items-center">
        <button
          className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-prev.svg')] hover:opacity-80 duration-500"
          type="button"
        ></button>
        <button
          className="w-10 h-10 bg-cover bg-center bg-[url('./images/play.svg')] hover:opacity-80 duration-500"
          type="button"
        ></button>
        <button
          className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-next.svg')] hover:opacity-80 duration-500"
          type="button"
        ></button>
      </div>
      <ul className="flex flex-col"></ul>
    </div>
  );
};

export default Player;