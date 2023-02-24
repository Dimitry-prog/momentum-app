import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { WeatherResponseServer } from '../../types/weatherModel';
import { getWeatherData } from '../actions/weatherAction';

type WeatherState = {
  loading: boolean;
  error: unknown | string;
  weatherData: WeatherResponseServer | null;
};

const initialState: WeatherState = {
  loading: false,
  error: null,
  weatherData: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<WeatherState>) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.weatherData = action.payload;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
