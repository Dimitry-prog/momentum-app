import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IQuote } from '../../types/quoteModel';
import { getQuotes } from '../actions/quoteActions';

type QuoteState = {
  loading: boolean;
  error: unknown | null;
  quotes: IQuote[] | null;
};

const initialState: QuoteState = {
  loading: false,
  error: null,
  quotes: JSON.parse(localStorage.getItem('quotes') ?? '[]'),
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<QuoteState>) => {
    builder
      .addCase(getQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.quotes = action.payload;
        localStorage.setItem('quotes', JSON.stringify(action.payload));
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;
