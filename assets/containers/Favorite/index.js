import React from "react";
import { observer, inject } from "mobx-react";
import FavoriteButton from "./../../components/FavoriteButton/index";

const FavoriteButtonContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore
  };
})(
  observer(({ eventsStore, eventid }) => {
    const eventStore = eventsStore.getEvent(eventid);

    return (
      <FavoriteButton
        active={eventStore.event.get("checked")}
        action={() => eventStore.toggle()}
      />
    );
  })
);

FavoriteButtonContainer.displayName = "FavoriteButtonContainer";
export default FavoriteButtonContainer;
