import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  notFound: {
    textAlign: "center",
    padding: "30px"
  }
});

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.notFound}>
      <Typography color="textSecondary">
        This isn't good. Seems like...
      </Typography>
      <Divider />
      <Typography gutterBottom variant="h5" component="h2">
        You got lost...
      </Typography>
    </div>
  );
}

export default NotFound;
