import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
        <Typography variant="h5" component="h2">
          Venue
        </Typography>
        <Typography variant="body2" component="p">
          Country: {country}
        </Typography>
        <Typography variant="body2" component="p">
          City: {city}
        </Typography>
        <Typography variant="body2" component="p">
          Place: {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

VenueInfo.propTypes = {};

export default VenueInfo;
