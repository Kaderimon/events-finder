import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  spinner: {
    textAlign: "center"
  }
});

function LoadingIndicator() {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
}

LoadingIndicator.propTypes = {};

export default LoadingIndicator;
