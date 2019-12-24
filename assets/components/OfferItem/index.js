import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  makeStyles
} from "@material-ui/core";

function OfferItem({ type, status, url }) {
  return (
    <ListItem button>
      <ListItemText secondary={status}>{type}</ListItemText>
      <ListItemSecondaryAction>
        <Button
          size="small"
          variant="outlined"
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          Buy
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

OfferItem.propTypes = {};

export default OfferItem;
