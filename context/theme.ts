import { createContext } from 'react';

type ModeType = { mode : 'dark' | 'light', toggleMode: () => boolean };

export const modes: ['dark', 'light'] = ['dark', 'light'];

const Mode = createContext({
  mode: modes[0],
  toggleMode() { return true; },
} as ModeType);

export default Mode;
