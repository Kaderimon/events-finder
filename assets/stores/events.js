import { observable, computed, action } from "mobx";
import ArtistEvent from "./Entities/Event";
import { server } from "../utils/config";

class EventsStore {
  @observable events;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.events = [];
  }

  getEvents() {
    return this.events;
  }

  @computed get favEvents() {
    const favEvents = this.events.filter(eventStore => {
      return eventStore.event.get("checked");
    });
    this.rootStore.favoritesStore.setEvents(favEvents);
    return favEvents;
  }

  getEvent(id) {
    for (let eventStore of this.events) {
      const { event } = eventStore;
      const eId = event.get("id");
      if (eId == id) return eventStore;
    }
    return {};
  }

  @action
  fetch(artistname) {
    fetch(`${server}/artists/${artistname}/events?app_id=foo`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(this.putEvents);
  }

  @action.bound
  putEvents(events) {
    this.events = events.map(event => {
      return new ArtistEvent(event);
    });
  }
}

export { EventsStore };

/*    */
