import React from "react";
import { observer, inject } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import VenueMap from "../../components/VenueMap";
import OffersList from "./../../components/OffersList/index";
import VenueInfo from "./../../components/VenueInfo/index";
import EventInfo from "./../../components/EventInfo/index";

const useStyles = makeStyles({
  spacingFix: {
    marginTop: "1%"
  }
});

const EventContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore
  };
})(
  observer(({ eventsStore, eventid }) => {
    const eventStore = eventsStore.getEvent(eventid);
    const classes = useStyles();

    return (
      <Grid
        container
        justify="center"
        xs={12}
        spacing={2}
        className={classes.spacingFix}
      >
        <Grid item xs={5}>
          <EventInfo
            description={eventStore.event.get("description")}
            lineup={eventStore.event.get("lineup")}
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
  })
);

EventContainer.displayName = "EventContainer";
export default EventContainer;
