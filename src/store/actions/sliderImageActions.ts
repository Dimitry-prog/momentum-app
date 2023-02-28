import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { SliderImageResponseServer } from '../../types/sliderImageModel';

type KnownError = {
  message: string;
};

export const getSliderImages = createAsyncThunk(
  'image/getImages',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios<SliderImageResponseServer[]>(
        `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=BeaHBxv90DkOKzHsa709D04BcDGP7esw9wZdKYpfHVc&count=30`
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
