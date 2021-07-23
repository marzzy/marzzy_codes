import ThemeType from 'types/theme';

export const colors = {
  light: {
    main: { primary: '#f6f1ee', secondary: '#ff914d', tertiary: '#344f5c' },
    neutral: { primary: '#ffa771', secondary: '#2a3f4a', tertiary: '#5d727d' },
    accents: { primary: '#2a3f4a', secondary: '#f8f4f1', tertiary: '#c5c1be' },
  },
  dark: {
    main: { primary: '#2a3f4a', secondary: '#f6f1ee', tertiary: '#ff914d' },
    neutral: { primary: '#cc743e', secondary: '#f8f4f1', tertiary: '#c5c1be' },
    accents: { primary: '#c5c1be', secondary: '#2a3f4a', tertiary: '#5d727d' },
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
