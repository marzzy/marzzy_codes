import ThemeType from 'types/theme';

// TODO: work on pallete
// const colors = {
//   dark: {
//     main: { text: '#ff914d', bg: '#344f5c' },
//     neutral: { text: '', bg: '' },
//     accent: { text: '#ffffff', bg: '#ff914d' },
//   },
//   light: {
//     main: { text: '#ff914d', bg: '#f6f1ee' },
//   },
// };

const colors = {
  dark: {
    primary: '#000',
  },
  light: {
    primary: '#fff',
  },
};

const BrValues = {
  xs: 300,
  sm: 600,
  md: 960,
  lg: 1280,
};

function theme(paletteType: 'dark'|'light'): ThemeType {
  return {
    palette: {
      ...colors[paletteType],
    },
    breakpoints: {
      values: BrValues,
      up(brPoint:string) {
        return `@media only screen and (min-width: ${BrValues[brPoint]}px)`;
      },
      down(brPoint:string) {
        return `@media only screen and (max-width: ${BrValues[brPoint]}px)`;
      },
      between(startBrPoint: string, endBrPoint: string) {
        return `@media only screen and (min-width:${BrValues[startBrPoint]}px) and (max-width:${BrValues[endBrPoint]}px)`;
      },
    },
  };
}

export default theme;
