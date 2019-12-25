import db from "./index";

class FavoritesDB {
  constructor() {
    this.db = db;
  }

  getFavorites() {
    return this.db.favorites.toArray();
  }

  saveFavorite({ event, offers, venue }) {
    return this.db.favorites.put({ id: event.id, event, offers, venue });
  }

  removeFavorite(id) {
    return this.db.favorites
      .where("id")
      .equals(id)
      .delete();
  }
}
export default FavoritesDB;
