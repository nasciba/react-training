import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  Grid,
  Typography,
} from "@material-ui/core";
import theme from "./styles/theme";
import appStyle from "./styles/App.style";
import CreateBeerForm from "./components/createBeerForm/CreateBeerForm";
import CreateBeerFormik from "./components/createBeerFormikForm/CreateBeerFormik";import WrapperDogList from "./components/wrapperDogList/WrapperDogList";

function App() {
  const classes = appStyle();

  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Grid container className={classes.root}>
            <WrapperDogList />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              
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
                <Typography>Formik</Typography>
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
