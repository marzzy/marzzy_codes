export type ColorLevelType = {
  [innerKey in 'primary' | 'secondary' | 'tertiary']: string
};

type ThemeType = {
  palette: {
    [key in 'main' | 'neutral' | 'accents']: ColorLevelType
  },
  breakpoints: {
    values: {
      [key in string] : number
    },
    up: (params:string) => string,
    down: (params:string) => string,
    between: (param1:string, param2:string) => string,
  },

};

export default ThemeType;
