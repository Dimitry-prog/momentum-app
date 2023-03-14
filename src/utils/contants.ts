import { ISong } from '../types/playerModel';
import aqua from '../assets/sounds/aqua_caelestis.mp3';
import ennio from '../assets/sounds/ennio_morricone.mp3';
import river from '../assets/sounds/river_flows_in_you.mp3';
import summer from '../assets/sounds/summer_wind.mp3';
import { ILanguages } from '../types';
import { ISetting } from '../types/settingsModel';

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

export const languages: ILanguages = {
  en: 'English',
  ru: 'Russian',
};

export const settingsWidget = {
  player: 'player',
  weather: 'weather',
  time: 'time',
  quote: 'quote',
  slider: 'slider',
};

export const settings: ISetting[] = [
  {
    id: 1,
    name: 'player',
    description: 'player widget',
  },
  {
    id: 2,
    name: 'weather',
    description: 'weather widget',
  },
  {
    id: 3,
    name: 'time',
    description: 'time widget',
  },
  {
    id: 4,
    name: 'quote',
    description: 'quote widget',
  },
  {
    id: 5,
    name: 'slider',
    description: 'slider widget',
  },
];
