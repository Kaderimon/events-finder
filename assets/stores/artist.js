import { observable, action, computed } from "mobx";
import { server } from "../utils/config";

class ArtistStore {
  @observable artist;
  @observable loading;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.loading = false;
    this.artist = {};
  }

  @computed get isArtistLoading() {
    return this.loading;
  }

  getArtist() {
    return this.artist;
  }

  @action
  fetchArtist(artName = "maroon%205") {
    this.artist = {};
    this.loading = true;
    this.rootStore.eventsStore.clearEvents();
    fetch(`${server}/artists/${artName}?app_id=foo`, { method: "GET" })
      .then(res => res.json())
      .then(this.fetchArtistSuccess, this.fetchArtistError);
  }

  @action.bound
  fetchArtistSuccess(user) {
    this.artist = user;
    this.loading = false;
    this.rootStore.eventsStore.fetch(user.name);
  }

  @action.bound
  fetchArtistError(error) {
    this.loading = false;
  }
}

export { ArtistStore };
