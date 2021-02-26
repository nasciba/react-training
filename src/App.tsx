import React from 'react';
import Button from './components/button/Button';
import DogDetails from './components/dogDetails/DogDetails'
import { CssBaseline, ThemeProvider, Grid, Typography } from '@material-ui/core';
import theme from './styles/theme';
import appStyle from './styles/App.style';
import CreateBeerForm from './components/createBeerForm/CreateBeerForm'

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
              <Button onClick={showAlert}>Click here!</Button>
            </Grid>
            <Grid container direction='column' justify="center" alignItems="center" item sm={3}>
            <Typography>Exercise 2, 3 and 4</Typography>

              <DogDetails
                image={"https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg"}
                dogsName="Adolfo"
              />
            </Grid>
            <Grid container direction='column' justify="center" alignItems="center" item sm={3}>
            <Typography>Exercise 5</Typography>
              <CreateBeerForm/>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
