import { useStaticRendering } from "mobx-react";
import { EventsStore } from "./events";
import { FavoritesStore } from "./favorites";
import { ArtistStore } from "./artist";
const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class RootStore {
  constructor() {
    this.artistStore = new ArtistStore(this);
    this.eventsStore = new EventsStore(this);
    this.favoritesStore = new FavoritesStore(this);
  }
}

export { RootStore };
