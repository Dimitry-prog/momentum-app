import React from 'react';
import { songs } from '../utils/contants';
import SongTrack from './SongTrack';

const Player = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-2 items-center">
        <button
          className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-prev.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
        <button
          className="w-10 h-10 bg-cover bg-center bg-[url('./images/play.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
        <button
          className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-next.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
      </div>
      <ul className="flex flex-col gap-1">
        {songs.map((song) => (
          <li key={song.id} className="text-white text-lg">
            <SongTrack src={song.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
