import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useTypedDispatch';
import { useAppSelector } from '../hooks/useTypedSelector';
import { getWeatherData } from '../store/actions/weatherAction';

const Weather: FC = () => {
  const [city, setCity] = useState<string>('Gomel');
  const dispatch = useAppDispatch();
  const { weatherData, error } = useAppSelector((state) => state.weather);
  console.log(weatherData);
  const errorMsg = error as string;

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, [city]);

  return (
    <div className="flex flex-col gap-2 text-white">
      <input
        value={city || ''}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter city"
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
              <p className="text-lg">Feels like: {weatherData.main.feels_like.toFixed()}&deg;C</p>
              <p className="text-lg">Wind: {weatherData.wind.speed}m/s</p>
              <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
