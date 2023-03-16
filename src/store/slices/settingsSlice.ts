import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsWidget } from 'utils/contants';
import { IShowSettings } from '../../types/settingsModel';

type SettingsState = {
  isOpenSettings: boolean;
  isShow: IShowSettings;
};

const isShowExist = localStorage.getItem('settings');

const initialState: SettingsState = {
  isOpenSettings: false,
  isShow: {
    player: isShowExist ? JSON.parse(isShowExist).player : true,
    weather: isShowExist ? JSON.parse(isShowExist).weather : true,
    time: isShowExist ? JSON.parse(isShowExist).time : true,
    quote: isShowExist ? JSON.parse(isShowExist).quote : true,
    slider: isShowExist ? JSON.parse(isShowExist).slider : true,
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
          localStorage.setItem('settings', JSON.stringify(state.isShow));
          break;
        case settingsWidget.weather:
          state.isShow.weather = !state.isShow.weather;
          localStorage.setItem('settings', JSON.stringify(state.isShow));
          break;
        case settingsWidget.time:
          state.isShow.time = !state.isShow.time;
          localStorage.setItem('settings', JSON.stringify(state.isShow));
          break;
        case settingsWidget.quote:
          state.isShow.quote = !state.isShow.quote;
          localStorage.setItem('settings', JSON.stringify(state.isShow));
          break;
        case settingsWidget.slider:
          state.isShow.slider = !state.isShow.slider;
          localStorage.setItem('settings', JSON.stringify(state.isShow));
          break;
      }
    },
  },
});

export const { toggleOpenSettings, toggleShowWidget } = settingsSlice.actions;

export default settingsSlice.reducer;
