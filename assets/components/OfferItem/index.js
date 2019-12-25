import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

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

OfferItem.propTypes = {
  type: PropTypes.string,
  status: PropTypes.string,
  url: PropTypes.string
};

export default OfferItem;
