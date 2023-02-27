import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IQuote } from '../../types/quoteModel';

type KnownError = {
  message: string;
};

export const getQuotes = createAsyncThunk('quote/getQuotes', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios<IQuote[]>(`https://type.fit/api/quotes`);

    return data;
  } catch (e) {
    const error = e as AxiosError<KnownError>;
    if (!error.response) {
      throw e;
    }
    return rejectWithValue(error.response.data.message);
  }
});
