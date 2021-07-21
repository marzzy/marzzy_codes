import ThemeType from 'types/theme';

const colors = {
  dark: {
    primary: 'black',
  },
  light: {
    primary: 'white',
  },
};

function theme(paletteType: 'dark'|'light'): ThemeType {
  return {
    palette: {
      ...colors[paletteType],
    },
  };
}

export default theme;
