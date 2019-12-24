import React from "react";
import PropTypes from "prop-types";
import OfferItem from "./../OfferItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

function OffersList({ offers }) {
  return (
    offers.length > 0 && (
      <Paper>
        <List aria-label="offers">
          {offers.map((item, idx) => {
            const { type, status, url } = item;

            return (
              <OfferItem
                key={`offerItem-${idx}`}
                type={type}
                status={status}
                url={url}
              />
            );
          })}
        </List>
      </Paper>
    )
  );
}

OffersList.propTypes = {};

export default OffersList;
