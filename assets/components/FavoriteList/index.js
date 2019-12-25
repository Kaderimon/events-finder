import React from "react";
import { PropTypes } from "prop-types";
import { PropTypes as MobxPropTypes } from "mobx-react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LoadingIndicator from "../LoadingIndicator";
import EventItem from "../EventItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  empty: {
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

function FavoriteList({ favEvents = [], loading }) {
  if (loading) return <LoadingIndicator />;
  const classes = useStyles();

  return favEvents.length > 0 ? (
    <List className={classes.root} aria-label="favEvents">
      {favEvents.map(eventStore => {
        const id = eventStore.event.get("id");

        return (
          <EventItem
            key={id}
            description={eventStore.event.get("description")}
            lineup={eventStore.event.get("lineup")}
            location={eventStore.location}
            date={eventStore.date}
          >
            <Link to={`/favorites/${id}`} className={classes.link}>
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

FavoriteList.propTypes = {
  favEvents: MobxPropTypes.observableArrayOf(MobxPropTypes.observableObject),
  loading: PropTypes.bool
};

export default FavoriteList;
