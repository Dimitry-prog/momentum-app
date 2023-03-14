import React, { FC } from 'react';

type SwitcherProps = {
  isChecked: boolean;
  description: string;
  onClick: () => void;
};

const Switcher: FC<SwitcherProps> = ({ isChecked, description, onClick }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="peer sr-only" checked={isChecked} onChange={onClick} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      <span className="ml-3 text-md font-medium text-black">{description}</span>
    </label>
  );
};

export default Switcher;
