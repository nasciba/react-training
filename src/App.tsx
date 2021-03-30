import React from "react";
import DogDetails from "./components/dogDetails/DogDetails";
import {
  CssBaseline,
  ThemeProvider,
  Grid,
  Typography,
} from "@material-ui/core";
import theme from "./styles/theme";
import appStyle from "./styles/App.style";
import CreateBeerForm from "./components/createBeerForm/CreateBeerForm";
import CreateBeerFormik from "./components/createBeerFormikForm/CreateBeerFormik";
import { getAllDogs } from "./services/dog/dogService";
import DogList from "./components/dogList/dogList/DogList";

function App() {
  const classes = appStyle();

  const apiCall = async () => {
    await getAllDogs();
  };

  React.useEffect(() => {
    apiCall();
  });

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <DogList />
          <Grid container className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid sm={3}>
                <DogDetails
                  image={
                    'https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg'
                  }
                  name={'Adolfo'}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                item
                xs={6}
              >
                <Typography>CreateBeerForm</Typography>
                <CreateBeerForm />
              </Grid>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                item
                xs={6}
              >
                <Typography>Exercise 6 - Using Formik</Typography>
                <CreateBeerFormik />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
