import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import Timelapse from './components/Timelapse';
import Quote from './components/Quote';
import Player from './components/Player';
import { useAppDispatch } from './hooks/useTypedDispatch';
import { getSliderImages } from './store/actions/sliderImageActions';
import { randomInt } from './utils/randomInt';
import Settings from './components/Settings';
import { useAppSelector } from './hooks/useTypedSelector';
import { toggleOpenSettings } from 'store/slices/settingsSlice';

const App = () => {
  const [image, setImage] = useState<string>('');
  const images = JSON.parse(localStorage.getItem('images') ?? '[]');
  const dispatch = useAppDispatch();
  const { isOpenSettings } = useAppSelector((state) => state.settings);
  const { slider } = useAppSelector((state) => state.settings.isShow);

  const handleOtherSlide = () => {
    const randomNum = randomInt(0, images.length);
    const randomImg = images[randomNum];
    setImage(randomImg);
  };

  useEffect(() => {
    dispatch(getSliderImages());
    handleOtherSlide();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`w-screen h-screen p-2 flex flex-col justify-between md:p-10 relative bg-blend-overlay bg-black/40 bg-cover bg-center transition-all delay-150 duration-1000`}
    >
      <header className="flex justify-between">
        <Player />
        <Weather />
      </header>

      <main className="relative">
        <button
          onClick={handleOtherSlide}
          className={`${
            slider ? 'opacity-80' : 'opacity-0 invisible'
          } absolute left-0 top-[50%] w-12 h-12 bg-cover bg-center bg-[url('./images/slider-prev.svg')] hover:opacity-100 transition-all duration-500`}
          type="button"
        ></button>
        <button
          onClick={handleOtherSlide}
          className={`${
            slider ? 'opacity-80' : 'opacity-0 invisible'
          } absolute right-0 top-[50%] w-12 h-12 bg-cover bg-center bg-[url('./images/slider-next.svg')] hover:opacity-100 transition-all duration-500`}
          type="button"
        ></button>
        <Timelapse />
      </main>

      <footer>
        <Quote />
      </footer>
      <Settings isOpen={isOpenSettings} />

      <button
        onClick={() => dispatch(toggleOpenSettings())}
        className="absolute right-[3%] bottom-[1%] w-8 h-8 bg-cover bg-center bg-[url('./images/setting.svg')] opacity-80 hover:opacity-100 duration-500"
        type="button"
      ></button>
    </div>
  );
};

export default App;
