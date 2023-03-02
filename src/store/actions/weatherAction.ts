import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherResponseServer } from '../../types/weatherModel';

type KnownError = {
  message: string;
};

type ThunkArg = {
  city: string;
  lang: string | null;
};

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async (arg: ThunkArg, { rejectWithValue }) => {
    try {
      const { data } = await axios<WeatherResponseServer>(
        `https://api.openweathermap.org/data/2.5/weather?q=${arg.city}&lang=${arg.lang}&appid=4fca10b1586e2521af68668120f7c145&units=metric`
      );

      return data;
    } catch (e) {
      const error = e as AxiosError<KnownError>;
      if (!error.response) {
        throw e;
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);
