import { observable, action, computed } from "mobx";
import ArtistEvent from "./Entities/Event";
import { server } from "../utils/config";

class EventsStore {
  @observable events;
  @observable loading;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.loading = false;
    this.events = [];
  }

  @computed get isEventsLoading() {
    return this.loading;
  }

  getEvents() {
    return this.events;
  }

  getEvent(id) {
    for (let eventStore of this.events) {
      const { event } = eventStore;
      const eventId = event.id;

      if (eventId == id) return eventStore;
    }
    return null;
  }

  addFavorite(event) {
    this.rootStore.favoritesStore.addFavorite(event);
  }

  removeFavorite(event) {
    this.rootStore.favoritesStore.removeFavorite(event);
  }

  @action
  clearEvents() {
    this.events = [];
  }

  @action
  fetch(artistname) {
    this.loading = true;
    fetch(`${server}/artists/${artistname}/events?app_id=foo`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(this.fetchEventsSuccess, this.fetchEventsError);
  }

  @action.bound
  fetchEventsSuccess(events) {
    this.events = events.map(event => {
      return new ArtistEvent(this, event);
    });
    this.loading = false;
  }

  @action.bound
  fetchEventsError(error) {
    this.loading = false;
  }
}

export { EventsStore };

/*    */
