import Dexie from "dexie";

const db = new Dexie("events-finder");

db.version(1).stores({
  favorites: `id, event, venue, offers`
});

export default db;
