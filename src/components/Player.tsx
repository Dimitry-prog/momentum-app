import React, { useCallback, useRef, useState } from 'react';
import { songs } from '../utils/contants';
import SongTrack from './SongTrack';
import SongButtons from './SongButtons';
import { ISong } from '../types/playerModel';
import { useAppSelector } from '../hooks/useTypedSelector';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songIndex, setSongIndex] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<ISong>(songs[songIndex]);
  const songRef = useRef<HTMLAudioElement | null>(null);
  const { player } = useAppSelector((state) => state.settings.isShow);

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

  const handleStartPlaySong = (index: number) => {
    setSongIndex(index);
    setCurrentSong(songs[index]);
    setIsPlaying(true);
  };

  return (
    <div className={`flex flex-col gap-y-5 ${player ? 'hidden' : ''} transition-all duration-500`}>
      <SongButtons
        songRef={songRef}
        handleNextSong={handleNextSong}
        songIndex={songIndex}
        setCurrentSong={setCurrentSong}
        setSongIndex={setSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <ul className="flex flex-col gap-1">
        {songs.map((song) => (
          <li
            onClick={() => handleStartPlaySong(song.id - 1)}
            key={song.id}
            className="text-white text-lg flex gap-1"
          >
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
