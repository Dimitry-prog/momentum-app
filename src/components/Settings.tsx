import React, { FC } from 'react';
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

  return (
    <aside
      onClick={() => dispatch(toggleOpenSettings())}
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
        <div className="flex gap-2 absolute right-[3%] bottom-[1%]">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              disabled={i18n.resolvedLanguage === lang}
              type="button"
              className="bg-gray-300 w-6 text-black hover:opacity-50 disabled:opacity-100"
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
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
      </div>
    </aside>
  );
};

export default Settings;
