import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../hooks/useTypedDispatch';
import { useAppSelector } from '../hooks/useTypedSelector';
import { getWeatherData } from '../store/actions/weatherAction';
import { useTranslation } from 'react-i18next';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';

const Weather: FC = () => {
  const [city, setCity] = useLocalStorage('city', 'Gomel');
  const dispatch = useAppDispatch();
  const { weatherData, error } = useAppSelector((state) => state.weather);
  const { weather } = useAppSelector((state) => state.settings.isShow);
  const errorMsg = error as string;
  const { t } = useTranslation();
  const debounce = useDebounce(city, 500);

  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    localStorage.setItem('city', JSON.stringify(e.target.value));
  };

  useEffect(() => {
    dispatch(
      getWeatherData({
        city: debounce,
        lang: localStorage.getItem('i18nextLng'),
      })
    );
  }, [debounce, localStorage.getItem('i18nextLng')]);

  return (
    <div
      className={`flex flex-col gap-2 text-white ${
        weather ? 'hidden' : ''
      } transition-all duration-500`}
    >
      <input
        value={city || ''}
        onChange={handleChangeCity}
        type="text"
        placeholder={t('placeholderCity') || 'Enter city'}
        className="text-lg p-1 outline-none bg-transparent border-b border-white placeholder:text-gray-300"
      />
      {errorMsg && <span className="text-lg text-red-400">{errorMsg}</span>}
      {weatherData && (
        <>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-3xl font-semibold">
                {weatherData.name}, {weatherData.sys.country}
              </p>
              <span className="text-lg">{weatherData.weather[0].description}</span>
            </div>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="weather"
              className="w-20 object-cover"
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-8xl font-semibold">{weatherData.main.temp.toFixed()}&deg;C </p>
            <div className="flex flex-col gap-2">
              <p className="text-lg">
                {t('weather_feels_like')}: {weatherData.main.feels_like.toFixed()}&deg;C
              </p>
              <p className="text-lg">
                {t('weather_wind')}: {weatherData.wind.speed}m/s
              </p>
              <p className="text-lg">
                {t('weather_humidity')}: {weatherData.main.humidity}%
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
