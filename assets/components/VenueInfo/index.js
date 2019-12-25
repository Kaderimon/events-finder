import React from "react";
import { PropTypes } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  venue: {
    height: "100%"
  }
});

function VenueInfo({ venue = {} }) {
  const classes = useStyles();
  const country = venue.get("country") || "";
  const city = venue.get("city") || "";
  const name = venue.get("name") || "";

  return (
    <Card className={classes.venue}>
      <CardContent>
        <Typography color="textSecondary">{country}</Typography>
        <Typography variant="h5" component="h2">
          Venue
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          City: {city}
        </Typography>
        <Typography color="textSecondary">Place: {name}</Typography>
      </CardContent>
    </Card>
  );
}

VenueInfo.propTypes = {
  venue: PropTypes.objectOrObservableObject
};

export default VenueInfo;
