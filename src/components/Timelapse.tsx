import React, { FC, useEffect, useState } from 'react';

const Timelapse: FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [name, setName] = useState<string>(() => {
    const savedItem = localStorage.getItem('name');
    if (savedItem) {
      return JSON.parse(savedItem);
    }
    return '';
  });

  const showTime = (): void => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTime(currentTime);
    showDate();
    getTimeOfDay();
    setInterval(showTime, 1000);
  };

  const showDate = (): void => {
    const date = new Date();
    const currentDate = date.toLocaleDateString('en-EN', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    setDate(currentDate);
  };

  const getTimeOfDay = (): string | undefined => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 4 && hours < 12) {
      return `morning`;
    }
    if (hours >= 12 && hours < 17) {
      return `afternoon`;
    }
    if (hours >= 17 && hours < 21) {
      return `evening`;
    }
    if (hours >= 21) {
      return `night`;
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    localStorage.setItem('name', JSON.stringify(e.target.value));
  };

  useEffect(() => {
    showTime();
  }, []);

  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center text-white">
      <div className="text-6xl font-semibold tracking-widest md:text-8xl">{time}</div>
      <div className="text-2xl md:text-4xl">{date}</div>
      <div className="grid grid-cols-2 items-center gap-1">
        <h1 className="text-4xl md:text-6xl text-right">{`Good ${getTimeOfDay()}`}, </h1>
        <input
          value={name || ''}
          onChange={handleChangeName}
          type="name"
          placeholder="Enter name"
          className="text-4xl md:text-6xl outline-none bg-transparent placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default Timelapse;
