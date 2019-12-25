import { observable, computed, action } from "mobx";

export default class Event {
  @observable event = observable.map();
  @observable venue = observable.map();
  @observable offers;

  constructor(parentStore, eventData = {}, checked = false) {
    const { venue, offers, ...rest } = eventData;
    this.parentStore = parentStore;
    this.event.merge(rest);
    this.venue.merge(venue);
    this.offers = offers;
    this.event.set("checked", checked);
  }

  getEventInfo() {
    return this.event;
  }

  getVenueInfo() {
    return this.venue;
  }

  getOffers() {
    return this.offers;
  }

  @computed get date() {
    const date = new Date(this.event.get("datetime"));

    return {
      day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
      month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
    };
  }

  @computed get location() {
    return `${this.venue.get("city")} - ${this.venue.get("name")}`;
  }

  @action toggle() {
    const checked = this.event.get("checked");
    this.event.set("checked", !checked);
    if (checked) {
      const id = this.event.get("id");
      this.parentStore.removeFavorite(id);
    } else {
      this.parentStore.addFavorite(this);
    }
  }
}
