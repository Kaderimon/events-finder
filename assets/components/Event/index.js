import React from "react";
import { PropTypes } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import VenueMap from "../VenueMap";
import VenueInfo from "../VenueInfo";
import EventInfo from "../EventInfo";
import OffersList from "../OffersList";

const useStyles = makeStyles({
  spacingFix: {
    marginTop: "1%",
    width: "100%"
  }
});

function Event({ eventStore }) {
  const classes = useStyles();
  const { id, description, lineup } = eventStore.event;

  return (
    <Grid container justify="center" spacing={2} className={classes.spacingFix}>
      <Grid item xs={5}>
        <EventInfo
          description={eventStore.event.description}
          lineup={eventStore.event.lineup}
          location={eventStore.location}
          date={eventStore.date}
        />
      </Grid>
      <Grid item xs={5}>
        <VenueInfo venue={eventStore.getVenueInfo()} />
      </Grid>
      <Grid item xs={12} sm={10}>
        <OffersList offers={eventStore.getOffers()} />
      </Grid>
      <Grid item xs={12} sm={10}>
        <VenueMap venue={eventStore.getVenueInfo()} />
      </Grid>
    </Grid>
  );
}

Event.propTypes = {
  eventStore: PropTypes.observableObject
};

export default Event;
