import { observable, computed, action } from "mobx";
import ArtistEvent from "./Entities/Event";

class FavoritesStore {
  @observable events;
  @observable loading;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.events = [];
  }

  @computed get isEventsLoading() {
    return this.loading;
  }

  getEvents() {
    return this.events;
  }

  @action
  setEvents(events) {
    this.events = events;
  }

  @action
  fetchEvents() {
    this.events = [];
    this.loading = true;
    fetchGithubEventsSomehow().then(
      this.fetchEventsSuccess,
      this.fetchEventsError
    );
  }

  @action.bound
  fetchEventsSuccess(events = []) {
    let eventsArray = [];
    events.forEach(event => {
      eventsArray.push(new ArtistEvent(event, true));
    });
    this.events = eventsArray;
    this.loading = false;
  }

  @action.bound
  fetchEventsError(error) {
    this.loading = false;
  }
}

export { FavoritesStore };
