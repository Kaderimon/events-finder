import React from "react";
import { observer, inject } from "mobx-react";
import FavoriteButton from "../../components/FavoriteButton/index";

const FavoriteButtonContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore,
    favoritesStore: rootStore.favoritesStore
  };
})(
  observer(({ favoritesStore, eventsStore, eventid }) => {
    const eventStore = eventsStore.getEvent(eventid);
    const favoriteStore = favoritesStore.getEvent(eventid);
    const store = eventStore !== null ? eventStore : favoriteStore;

    return (
      store !== null && (
        <FavoriteButton
          active={store.event.get("checked")}
          action={() => store.toggle()}
        />
      )
    );
  })
);

export default FavoriteButtonContainer;
