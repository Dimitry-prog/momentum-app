import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { SliderImageResponseServer } from '../../types/sliderImageModel';
import { getSliderImages } from '../actions/sliderImageActions';

type sliderImageState = {
  loading: boolean;
  error: unknown | string;
  sliderImageData: SliderImageResponseServer[] | null;
};

const initialState: sliderImageState = {
  loading: false,
  error: null,
  sliderImageData: null,
};

const sliderImageSlice = createSlice({
  name: 'sliderImage',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<sliderImageState>) => {
    builder
      .addCase(getSliderImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSliderImages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.sliderImageData = action.payload;
        const images = action.payload.map((elem) => elem.urls.regular);
        localStorage.setItem('images', JSON.stringify(images));
      })
      .addCase(getSliderImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sliderImageSlice.reducer;
