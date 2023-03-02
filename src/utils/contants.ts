import { ISong } from '../types/playerModel';
import aqua from '../assets/sounds/aqua_caelestis.mp3';
import ennio from '../assets/sounds/ennio_morricone.mp3';
import river from '../assets/sounds/river_flows_in_you.mp3';
import summer from '../assets/sounds/summer_wind.mp3';

export const songs: ISong[] = [
  {
    id: 1,
    title: 'Aqua Caelestis',
    src: aqua,
    duration: '00:39',
  },
  {
    id: 2,
    title: 'Ennio Morricone',
    src: ennio,
    duration: '01:37',
  },
  {
    id: 3,
    title: 'River Flows In You',
    src: river,
    duration: '01:37',
  },
  {
    id: 4,
    title: 'Summer Wind',
    src: summer,
    duration: '01:51',
  },
];

type ILanguages = {
  en: string;
  ru: string;
};

export const languages: ILanguages = {
  en: 'English',
  ru: 'Russian',
};
