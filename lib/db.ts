import Database from 'better-sqlite3'; // Keep this as is
import path from 'path';

const db = new Database(path.resolve('data.db'), { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    experience INTEGER NOT NULL
  );
`);

export default db;
