import React from "react";
import { observer, inject } from "mobx-react";
import EventsList from "../../components/EventsList";
import ListWrapper from "../../components/ListWrapper";

const EventListContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore
  };
})(
  observer(({ eventsStore }) => {
    return (
      <ListWrapper title="Upcoming Events">
        <EventsList
          events={eventsStore.getEvents()}
          loading={eventsStore.isEventsLoading}
        />
      </ListWrapper>
    );
  })
);

export default EventListContainer;
