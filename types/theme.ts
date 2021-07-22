type ThemeType = {
  palette: {
    primary: string
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
