import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme ({
  palette: {
    primary: {
      main : '#70948E',
      light: '#EBFEF0',
      dark: '#3B4A3F'
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  }
});

export default theme;

