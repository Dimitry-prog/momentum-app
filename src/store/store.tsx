import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';
import quoteSlice from './slices/quoteSlice';
import sliderImageSlice from './slices/sliderImageSlice';
import settingsSlice from './slices/settingsSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    quote: quoteSlice,
    sliderImage: sliderImageSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
