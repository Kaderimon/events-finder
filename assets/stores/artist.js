import { observable, computed, action, asMap, autorun } from "mobx";
import fetch from "isomorphic-unfetch";
import { server } from "../utils/config";

class ArtistStore {
  @observable artist;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.artist = {};
  }

  getArtist() {
    return this.artist;
  }

  @action
  fetchArtist(artName = "maroon%205") {
    this.artist = {};
    fetch(`${server}/artists/${artName}?app_id=foo`, { method: "GET" })
      .then(res => res.json())
      .then(this.fetchArtistSuccess);
  }

  @action.bound
  fetchArtistSuccess(user) {
    this.artist = user;
    this.rootStore.eventsStore.fetch(user.name);
  }
}

export { ArtistStore };

/*

*/
