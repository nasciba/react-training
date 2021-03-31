import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { spinnerStyle } from './SpinnerView.styles';

function SpinnerView() {
    const classes = spinnerStyle();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default SpinnerView;
