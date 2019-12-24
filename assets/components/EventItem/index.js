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
    paddingRight: "25%"
  }
});

function EventItem({
  id,
  description,
  lineup,
  location,
  date,
  artist = {},
  children
}) {
  const classes = useStyles();

  return (
    <ListItem button className={classes.secondayAction}>
      <ListItemAvatar>
        <ListItemText secondary={date.month}>{date.day}</ListItemText>
      </ListItemAvatar>
      <ListItemText secondary={location}>{description}</ListItemText>
      <ListItemSecondaryAction>
        <Button variant="outlined">{children}</Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

EventItem.propTypes = {};

export default EventItem;
