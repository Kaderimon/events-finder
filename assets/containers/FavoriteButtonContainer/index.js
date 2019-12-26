import React from "react";
import { observer, inject } from "mobx-react";
import FavoriteButton from "../../components/FavoriteButton";

const FavoriteButtonContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore,
    favoritesStore: rootStore.favoritesStore
  };
})(
  observer(({ favoritesStore, eventsStore, eventid }) => {
    const eventStore = eventsStore.getEvent(eventid);
    const favoriteStore = favoritesStore.getEvent(eventid);
    const store = favoriteStore !== null ? favoriteStore : eventStore;

    return (
      store !== null && (
        <FavoriteButton
          active={store.event.checked}
          action={() => store.toggle()}
        />
      )
    );
  })
);

export default FavoriteButtonContainer;
