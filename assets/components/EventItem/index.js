import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  ListItemAvatar,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  secondayAction: {
    paddingRight: "calc(16px + 64px)"
  },
  date: {
    marginRight: "6px",
    textAlign: "center"
  }
});

function EventItem({ description, location, date, children }) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.secondayAction}>
      <div className={classes.date}>
        <ListItemText secondary={date.month}>{date.day}</ListItemText>
      </div>
      <ListItemText secondary={location}>{description}</ListItemText>
      <ListItemSecondaryAction>
        <Button size="small" variant="outlined">
          {children}
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

EventItem.propTypes = {
  description: PropTypes.string,
  lineup: PropTypes.array,
  location: PropTypes.string,
  date: PropTypes.shape({
    month: PropTypes.string,
    day: PropTypes.string
  })
};

export default EventItem;
