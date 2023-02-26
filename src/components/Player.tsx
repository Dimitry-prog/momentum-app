import React, { useCallback, useRef, useState } from 'react';
import { songs } from '../utils/contants';
import SongTrack from './SongTrack';
import SongButtons from './SongButtons';
import { ISong } from '../types/playerModel';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songIndex, setSongIndex] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<ISong>(songs[songIndex]);
  const songRef = useRef<HTMLAudioElement | null>(null);

  const handleNextSong = useCallback(() => {
    if (songIndex >= songs.length - 1) {
      setSongIndex(0);
      setCurrentSong(songs[0]);
    } else {
      setSongIndex((prev) => prev + 1);
      setCurrentSong(songs[songIndex + 1]);
    }
    setIsPlaying(true);
    songRef.current!.play();
  }, [songIndex, setCurrentSong, setSongIndex, songRef]);

  return (
    <div className="flex flex-col gap-y-5">
      <SongButtons
        songRef={songRef}
        handleNextSong={handleNextSong}
        songIndex={songIndex}
        setCurrentSong={setCurrentSong}
        setSongIndex={setSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      {/*<SongTrack*/}
      {/*  song={songs[songIndex]}*/}
      {/*  songIndex={songIndex}*/}
      {/*  songRef={songRef}*/}
      {/*  isPlaying={isPlaying}*/}
      {/*  handleNextSong={handleNextSong}*/}
      {/*/>*/}
      <ul className="flex flex-col gap-1">
        {songs.map((song) => (
          <li key={song.id} className="text-white text-lg">
            <SongTrack
              currentSong={currentSong}
              song={song}
              songRef={songRef}
              isPlaying={isPlaying}
              handleNextSong={handleNextSong}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
