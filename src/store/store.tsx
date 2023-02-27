import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slices/weatherSlice';
import quoteSlice from './slices/quoteSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    quote: quoteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
