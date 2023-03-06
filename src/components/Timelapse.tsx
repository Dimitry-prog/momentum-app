import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const Timelapse: FC = () => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [name, setName] = useLocalStorage('name', '');
  const { t } = useTranslation();

  const showTime = (lang: string | null): void => {
    const date = new Date();
    let timeFormat: string;
    if (lang === 'en') {
      timeFormat = 'en-US';
    } else {
      timeFormat = 'en-GB';
    }
    const currentTime = date.toLocaleTimeString(timeFormat);
    setTime(currentTime);
    showDate(localStorage.getItem('i18nextLng'));
    getTimeOfDay();
    setInterval(() => {
      showTime(localStorage.getItem('i18nextLng'));
    }, 1000);
  };

  const showDate = (lang: string | null): void => {
    const date = new Date();
    let language: string;
    if (lang === 'en') {
      language = 'en-EN';
    } else {
      language = 'ru-RU';
    }
    const currentDate = date.toLocaleDateString(language, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    setDate(currentDate);
  };

  const getTimeOfDay = (): string => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) {
      return t('greeting', { context: 'morning' });
    }
    if (hours >= 12 && hours < 18) {
      return t('greeting', { context: 'afternoon' });
    }
    if (hours >= 18 && hours < 24) {
      return t('greeting', { context: 'evening' });
    }
    if (hours >= 24) {
      return t('greeting', { context: 'night' });
    }
    return t('greeting');
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    localStorage.setItem('name', JSON.stringify(e.target.value));
  };

  // useEffect(() => {
  //   showTime(localStorage.getItem('i18nextLng'));
  // }, [localStorage.getItem('i18nextLng')]);

  return (
    <div className="flex flex-col gap-2 md:gap-4 items-center text-white">
      <div className="text-6xl font-semibold tracking-widest md:text-8xl">{time}</div>
      <div className="text-2xl md:text-4xl">{date}</div>
      <div className="grid grid-cols-2 items-center gap-2">
        <h1 className="text-4xl md:text-6xl text-right">{getTimeOfDay()}</h1>
        <input
          value={name || ''}
          onChange={handleChangeName}
          type="name"
          placeholder={t('placeholderName') || 'Enter name'}
          className="text-4xl md:text-6xl outline-none bg-transparent placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default Timelapse;
