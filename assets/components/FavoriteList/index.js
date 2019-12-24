import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import EventItem from "../EventItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  title: {
    paddingTop: "16px",
    paddingLeft: "16px"
  }
}));

function FavoriteList({ favEvents = [] }) {
  const classes = useStyles();

  return (
    favEvents.length > 0 && (
      <Paper>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          Favorites
        </Typography>
        <Divider />
        <List className={classes.root} aria-label="favEvents">
          {favEvents.map(eventStore => {
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

FavoriteList.propTypes = {};

export default FavoriteList;
