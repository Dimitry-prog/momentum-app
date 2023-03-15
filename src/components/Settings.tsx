import React, { ChangeEvent, FC } from 'react';
import Switcher from './Switcher';
import { languages, settings, settingsWidget } from '../utils/contants';
import { useTranslation } from 'react-i18next';
import { toggleOpenSettings, toggleShowWidget } from '../store/slices/settingsSlice';
import { useAppDispatch } from '../hooks/useTypedDispatch';
import { useAppSelector } from '../hooks/useTypedSelector';
import { IShowSettings } from '../types/settingsModel';

type SettingsProps = {
  isOpen: boolean;
};

const Settings: FC<SettingsProps> = ({ isOpen }) => {
  const { i18n } = useTranslation();
  const { isShow } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleToggleShowWidget = (widget: string): void => {
    switch (widget) {
      case settingsWidget.weather:
        dispatch(toggleShowWidget(widget));
        break;
      case settingsWidget.player:
        dispatch(toggleShowWidget(widget));
        break;
      case settingsWidget.time:
        dispatch(toggleShowWidget(widget));
        break;
      case settingsWidget.quote:
        dispatch(toggleShowWidget(widget));
        break;
      case settingsWidget.slider:
        dispatch(toggleShowWidget(widget));
        break;
    }
  };

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <aside
      className={`${
        isOpen ? `opacity-100 visible` : `invisible`
      } fixed top-0 left-0 w-full h-full opacity-0 bg-black/50 z-50 transition-all duration-500`}
    >
      <div
        className={`${
          isOpen ? `right-0` : `right-[-320px]`
        } fixed top-0 w-full h-full p-2 max-w-sm md:p-10 flex flex-col items-center gap-6 bg-gray-300 text-black transition-all duration-500`}
      >
        <h3 className="mt-5 text-xl font-bold">Customize your app</h3>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-lg font-medium">What widgets you prefer?</h4>
          {settings.map((setting) => {
            const { id, description, name } = setting;
            return (
              <Switcher
                key={id}
                isChecked={isShow[name as keyof IShowSettings]}
                onClick={() => handleToggleShowWidget(name)}
                description={description}
              />
            );
          })}
        </div>

        <div className="flex gap-4">
          <h4 className="text-lg font-medium">Choose the language</h4>
          <select
            onChange={handleChangeLanguage}
            defaultValue="EN"
            className="text-black text-lg outline-none rounded-md border focus:border-blue-500"
          >
            {Object.keys(languages).map((lang) => (
              <option key={lang} value={lang} className="bg-gray-300">
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => dispatch(toggleOpenSettings())}
          type="button"
          className="w-6 h-6 absolute top-2 right-2 bg-[url('./images/cancel_icon.svg')] bg-no-repeat bg-center bg-contain hover:opacity-70"
        ></button>
      </div>
    </aside>
  );
};

export default Settings;
