import React from "react";
import { observer, inject } from "mobx-react";
import EventsList from "../../components/EventsList";

const EventListContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore
  };
})(
  observer(({ eventsStore }) => {
    return <EventsList events={eventsStore.getEvents()} />;
  })
);

EventListContainer.displayName = "EventListContainer";
export default EventListContainer;
