import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import EventItem from "../EventItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

function EventsList({ events = [] }) {
  const classes = useStyles();

  return (
    events.length > 0 && (
      <Paper>
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
                <Link to={`/events/${id}`}>More</Link>
              </EventItem>
            );
          })}
        </List>
      </Paper>
    )
  );
}

EventsList.propTypes = {};

export default EventsList;
