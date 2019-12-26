import { observable, computed, action } from "mobx";

export default class Event {
  @observable event;
  @observable venue;
  @observable offers;

  constructor(parentStore, eventData = {}, checked = false) {
    const { venue, offers, ...rest } = eventData;
    this.parentStore = parentStore;
    this.event = { ...rest, checked };
    this.venue = venue;
    this.offers = offers;
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
    const date = new Date(this.event.datetime);

    return {
      day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
      month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
    };
  }

  @computed get location() {
    return `${this.venue.city} - ${this.venue.name}`;
  }

  @action toggle() {
    const { checked } = this.event;
    this.event.checked = !checked;
    if (checked) {
      const { id } = this.event;
      this.parentStore.removeFavorite(id);
    } else {
      this.parentStore.addFavorite(this);
    }
  }
}
