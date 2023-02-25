import React, { FC, useEffect, useRef, useState } from 'react';

type SongTrackProps = {
  src: string;
  // isPlaying: boolean;
  // setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const SongTrack: FC<SongTrackProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const songRef = useRef<HTMLAudioElement | null>(null);

  const handleToggleSong = () => {
    if (isPlaying) {
      songRef.current!.play();
    } else {
      songRef.current!.pause();
    }
  };

  useEffect(() => {
    handleToggleSong();
  }, [isPlaying]);

  return (
    <div
      onClick={() => {
        setIsPlaying((prev) => !prev);
        handleToggleSong;
      }}
      className="w-8 h-8 bg-gray-400"
    >
      <audio src={src} ref={songRef}>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default SongTrack;
