import React, { FC } from 'react';
import { ISong } from '../types/playerModel';

type SongTrackProps = {
  currentSong: ISong;
  song: ISong;
  songRef: React.MutableRefObject<HTMLAudioElement | null>;
  handleNextSong: () => void;
  isPlaying: boolean;
};

const SongTrack: FC<SongTrackProps> = ({
  song,
  currentSong,
  songRef,
  isPlaying,
  handleNextSong,
}) => {
  const isActiveSong = isPlaying && song === currentSong;

  return (
    <div>
      <p className={`${isActiveSong ? `font-bold` : ``} text-white text-lg`}>
        {song.title} | {song.duration}
      </p>
      <audio src={currentSong.src} ref={songRef} onEnded={handleNextSong}>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default SongTrack;
