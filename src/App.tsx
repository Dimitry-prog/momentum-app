import Player from 'components/Player';
import Quote from 'components/Quote';
import Timelapse from 'components/Timelapse';
import Weather from 'components/Weather';
import React from 'react';

const App = () => {
  return (
    <div className="h-screen p-2 md:p-10 bg-blend-overlay bg-black/40 bg-cover bg-center bg-[url('./images/test.jpg')]">
      <Player />
      <Weather />
      <Timelapse />
      <Quote />
    </div>
  );
};

export default App;
