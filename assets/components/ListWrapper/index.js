import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: "16px",
    paddingLeft: "16px"
  },
  empty: {
    textAlign: "center"
  }
}));

function ListWrapper({ title, children }) {
  const classes = useStyles();
  return (
    <Paper>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.title}
      >
        {title}
      </Typography>
      <Divider />
      {children}
    </Paper>
  );
}

ListWrapper.propTypes = {
  title: PropTypes.string
};

export default ListWrapper;
