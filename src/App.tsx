import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import Timelapse from './components/Timelapse';
import Quote from './components/Quote';
import Player from './components/Player';
import { useAppDispatch } from './hooks/useTypedDispatch';
import { getSliderImages } from './store/actions/sliderImageActions';
import { randomInt } from './utils/randomInt';

const App = () => {
  const [image, setImage] = useState<string>('');
  const images = JSON.parse(localStorage.getItem('images') ?? '[]');

  const dispatch = useAppDispatch();

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
      className="w-screen h-screen p-2 flex flex-col justify-between md:p-10 bg-blend-overlay bg-black/40 bg-cover bg-center transition-all delay-150 duration-1000"
    >
      <header className="flex justify-between">
        <Player />
        <Weather />
      </header>

      <main className="relative">
        <button
          onClick={handleOtherSlide}
          className="absolute left-0 top-[50%] w-12 h-12 bg-cover bg-center bg-[url('./images/slider-prev.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
        <button
          onClick={handleOtherSlide}
          className="absolute right-0 top-[50%] w-12 h-12 bg-cover bg-center bg-[url('./images/slider-next.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
        <Timelapse />
      </main>

      <footer>
        <Quote />
      </footer>
    </div>
  );
};

export default App;
