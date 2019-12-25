import { observable, computed, action, toJS } from "mobx";
import ArtistEvent from "./Entities/Event";
import FavoritesDB from "./../../db/favoritesDB";

const favoritesDB = new FavoritesDB();
class FavoritesStore {
  @observable events;
  @observable loading;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.loading = false;
    this.events = [];
    this.fetchEvents();
  }

  @computed get isFavoritesLoading() {
    return this.loading;
  }

  getEvents() {
    return this.events;
  }

  getEvent(id) {
    for (let eventStore of this.events) {
      const { event } = eventStore;
      const eId = event.get("id");
      if (eId == id) return eventStore;
    }
    return null;
  }

  @action
  addFavorite(event) {
    this.events = [...this.events, event];
    favoritesDB.saveFavorite(toJS(event));
  }

  @action
  removeFavorite(id) {
    this.events = this.events.filter(({ event }) => {
      const eventId = event.get("id");

      return id != eventId;
    });
    favoritesDB.removeFavorite(id);
  }

  @action
  fetchEvents() {
    this.events = [];
    this.loading = true;
    favoritesDB
      .getFavorites()
      .then(this.fetchEventsSuccess, this.fetchEventsError);
  }

  @action.bound
  fetchEventsSuccess(events = []) {
    this.events = events.map(({ event, offers, venue }) => {
      return new ArtistEvent(this, { ...event, offers, venue }, true);
    });
    this.loading = false;
  }

  @action.bound
  fetchEventsError(error) {
    this.loading = false;
  }
}

export { FavoritesStore };
