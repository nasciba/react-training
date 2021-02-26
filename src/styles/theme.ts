import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme ({
  palette: {
    primary: {
      main : '#52F799',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  }
});

export default theme;

