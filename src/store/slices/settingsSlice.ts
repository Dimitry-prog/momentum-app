import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsWidget } from 'utils/contants';
import { IShowSettings } from '../../types/settingsModel';

type SettingsState = {
  isOpenSettings: boolean;
  isShow: IShowSettings;
};

const initialState: SettingsState = {
  isOpenSettings: false,
  isShow: {
    player: false,
    weather: false,
    time: false,
    quote: false,
    slider: false,
  },
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleOpenSettings(state) {
      state.isOpenSettings = !state.isOpenSettings;
    },
    toggleShowWidget(state, { payload }: PayloadAction<string>) {
      switch (payload) {
        case settingsWidget.player:
          state.isShow.player = !state.isShow.player;
          break;
        case settingsWidget.weather:
          state.isShow.weather = !state.isShow.weather;
          break;
        case settingsWidget.time:
          state.isShow.time = !state.isShow.time;
          break;
        case settingsWidget.quote:
          state.isShow.quote = !state.isShow.quote;
          break;
        case settingsWidget.slider:
          state.isShow.slider = !state.isShow.slider;
          break;
      }
    },
  },
});

export const { toggleOpenSettings, toggleShowWidget } = settingsSlice.actions;

export default settingsSlice.reducer;
