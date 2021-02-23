import React from 'react';
import Button from './components/button/Button';
import DogDetails from './components/dog-details/DogDetails'
import { CssBaseline, ThemeProvider, Grid, Typography } from '@material-ui/core';
import theme from './components/styles/theme';
import appStyle from './components/style'

function App() {
  const classes = appStyle();

  const showAlert = () => {
    alert("Clicado");
  }

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Grid container className={classes.root}>
            <Grid container direction='column' justify="center" alignItems="center" item sm={3}>
              <Typography>Exercise 1</Typography>
              <Button onClick={showAlert}>Clique aqui!</Button>
            </Grid>
            <Grid container direction='column' justify="center" alignItems="center" item sm={3}>
            <Typography>Exercise 2 and 3</Typography>

              <DogDetails
                image={"https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg"}
                dogsName="Adolfo"
              />
            </Grid>
          </Grid>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
