import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PropTypes as MobxPropTypes } from "mobx-react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EventItem from "../EventItem";
import LoadingIndicator from "../LoadingIndicator";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  empty: {
    textAlign: "center"
  }
}));

function EventsList({ events = [], loading }) {
  if (loading) return <LoadingIndicator />;

  const classes = useStyles();

  return events.length > 0 ? (
    <List className={classes.root} aria-label="events">
      {events.map(eventStore => {
        const id = eventStore.event.get("id");
        return (
          <EventItem
            key={id}
            id={id}
            description={eventStore.event.get("description")}
            lineup={eventStore.event.get("lineup")}
            location={eventStore.location}
            date={eventStore.date}
          >
            <Link to={`/events/${id}`} className={classes.link}>
              More
            </Link>
          </EventItem>
        );
      })}
    </List>
  ) : (
    <Typography
      gutterBottom
      variant="body2"
      component="p"
      className={classes.empty}
    >
      Empty
    </Typography>
  );
}

EventsList.propTypes = {
  events: MobxPropTypes.observableArrayOf(MobxPropTypes.observableObject),
  loading: PropTypes.bool
};

export default EventsList;
