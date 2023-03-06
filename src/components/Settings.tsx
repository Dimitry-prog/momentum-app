import React, { FC } from 'react';
import Switcher from './Switcher';
import { languages } from '../utils/contants';
import { useTranslation } from 'react-i18next';

type SettingsProps = {
  isOpen: boolean;
};

const Settings: FC<SettingsProps> = ({ isOpen }) => {
  const { i18n } = useTranslation();

  return (
    <aside
      className={`${
        isOpen ? `opacity-100 visible` : `invisible`
      } fixed top-0 left-0 w-full h-full opacity-0 bg-black/50 z-50 transition-all duration-500`}
    >
      <div
        className={`${
          isOpen ? `right-0` : `right-[-320px]`
        } fixed top-0 w-full h-full p-2 max-w-sm md:p-10 flex flex-col items-center gap-2 bg-gray-300 text-black transition-all duration-500`}
      >
        <h3 className="text-lg font-semibold">Customize your app</h3>
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
        <Switcher isChecked={true} description="weather widget" />
      </div>
    </aside>
  );
};

export default Settings;
