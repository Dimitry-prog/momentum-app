import React, { FC, useCallback, useEffect } from 'react';
import { songs } from '../utils/contants';
import { ISong } from '../types/playerModel';

type SongButtonsProps = {
  songRef: React.MutableRefObject<HTMLAudioElement | null>;
  handleNextSong: () => void;
  songIndex: number;
  setSongIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const SongButtons: FC<SongButtonsProps> = ({
  songRef,
  handleNextSong,
  songIndex,
  setSongIndex,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) => {
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrevious = useCallback(() => {
    if (songIndex === 0) {
      const lastSongIndex = songs.length - 1;
      setSongIndex(lastSongIndex);
      setCurrentSong(songs[lastSongIndex]);
    } else {
      setSongIndex((prev) => prev - 1);
      setCurrentSong(songs[songIndex - 1]);
    }
    setIsPlaying(true);
    songRef.current!.play();
    if (songRef.current!.duration) {
      console.log("i'm here");
    }
  }, [songIndex, setCurrentSong, setSongIndex, songRef]);

  useEffect(() => {
    if (isPlaying) {
      songRef.current!.play();
    } else {
      songRef.current!.pause();
    }
  }, [isPlaying, songRef, handlePrevious]);

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handlePrevious}
        className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-prev.svg')] opacity-80 hover:opacity-100 duration-500"
        type="button"
      ></button>
      <button
        onClick={togglePlayPause}
        className={`${
          isPlaying ? `bg-[url('./images/pause.svg')]` : `bg-[url('./images/play.svg')]`
        } w-10 h-10 bg-cover bg-center opacity-80 hover:opacity-100 duration-500`}
        type="button"
      ></button>
      <button
        onClick={handleNextSong}
        className="w-8 h-8 bg-cover bg-center bg-[url('./images/play-next.svg')] opacity-80 hover:opacity-100 duration-500"
        type="button"
      ></button>
    </div>
  );
};

export default SongButtons;
