const StormDB = require("stormdb");

// start db with "./db.stormdb" storage location
const engine = new StormDB.localFileEngine("./db.stormdb");
export const db = new StormDB(engine);

// // set default db value if db is empty
db.default({ resolut: 0 });

// // add new users entry
// db.get("users").push({ name: "tom" });

// // update username of first user
// db.get("users")
//   .get(0)
//   .get("name")
//   .set("jeff");

// // save changes to db
// db.save();