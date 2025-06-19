const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:'); // 在記憶體中建立資料庫

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");
  db.run("INSERT INTO lorem VALUES ('Hello, world')");
  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    if (err) throw err;
    console.log(`${row.id}: ${row.info}`);
  });
});

db.close();
