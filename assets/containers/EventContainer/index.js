import React from "react";
import { observer, inject } from "mobx-react";
import Event from "../../components/Event";
import NotFound from "../../components/NotFound";

const EventContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore,
    favoritesStore: rootStore.favoritesStore
  };
})(
  observer(({ favoritesStore, eventsStore, eventid }) => {
    const eventStore = eventsStore.getEvent(eventid);
    const favoriteStore = favoritesStore.getEvent(eventid);
    const store = eventStore !== null ? eventStore : favoriteStore;

    return store !== null ? (
      <Event eventStore={store} eventid={eventid} />
    ) : (
      <NotFound />
    );
  })
);

export default EventContainer;
