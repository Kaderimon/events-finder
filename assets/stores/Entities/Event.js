import { observable, computed, action, asMap, autorun } from "mobx";

export default class Event {
  @observable event = observable.map();
  @observable venue = observable.map();
  @observable offers;

  constructor(eventData = {}, checked = false) {
    const { venue, offers, ...rest } = eventData;
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
    this.event.set("checked", !this.event.get("checked"));
  }
}
