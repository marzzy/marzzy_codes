import ThemeType from 'types/theme';

export const colors = {
  light: {
    main: { primary: '#845EC2', secondary: '#FFC75F', tertiary: '#F9F871' },
    neutral: { primary: '#503181', secondary: '#FF5E78', tertiary: '#F98B00' },
    accents: { primary: '#b8a3dc', secondary: '#FFFFC1', tertiary: 'rgb(189, 105, 0)' },
  },
  dark: {
    main: { primary: '#202040' , secondary: '#FF6363', tertiary: '#613d76'},
    neutral: { primary: '#6666b2', secondary: '#FFBD69', tertiary: '#c4add1' },
    accents: { primary: '#26004d', secondary:'#ffddb3', tertiary: '#FF6363' },
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
