import Player from 'components/Player';
import Quote from 'components/Quote';
import Timelapse from 'components/Timelapse';
import Weather from 'components/Weather';
import React from 'react';

const App = () => {
  return (
    <div className="h-screen p-2 flex flex-col justify-between md:p-10 bg-blend-overlay bg-black/40 bg-cover bg-center bg-[url('./images/test.jpg')]">
      <header className="flex justify-between">
        <Player />
        <Weather />
      </header>

      <main className="relative">
        <button
          className="absolute left-0 top-[50%] w-12 h-12 bg-cover bg-center bg-[url('./images/slider-prev.svg')] opacity-80 hover:opacity-100 duration-500"
          type="button"
        ></button>
        <button
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
