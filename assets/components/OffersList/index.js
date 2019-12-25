import React from "react";
import { PropTypes } from "mobx-react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import OfferItem from "./../OfferItem";

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

OffersList.propTypes = {
  offers: PropTypes.observableArray
};

export default OffersList;
