/**
 * Turso connection for the CMS. ASMI shares a database with the TIU site, so
 * every table here is prefixed `asmi_` and nothing touches TIU's tables.
 */
import { createClient, type Client } from '@libsql/client';

let client: Client | null = null;
let ready: Promise<void> | null = null;

export function db(): Client {
  if (!client) {
    const url = process.env.TURSO_DATABASE_URL;
    if (!url) throw new Error('TURSO_DATABASE_URL is not set');
    client = createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN });
  }
  return client;
}

/** Creates the tables on first use. Idempotent. */
export function ensureSchema(): Promise<void> {
  ready ??= db()
    .batch([
      `CREATE TABLE IF NOT EXISTS asmi_media_slots (
         id TEXT PRIMARY KEY, src TEXT, alt TEXT, caption TEXT,
         updated_at TEXT NOT NULL DEFAULT (datetime('now')))`,
      // Rows for built-in gallery ids hold overrides (NULL = keep default);
      // rows with custom=1 are items added through the admin.
      `CREATE TABLE IF NOT EXISTS asmi_gallery (
         id TEXT PRIMARY KEY, custom INTEGER NOT NULL DEFAULT 0, hidden INTEGER NOT NULL DEFAULT 0,
         title TEXT, category TEXT, tag TEXT, caption TEXT, image TEXT,
         created_at TEXT NOT NULL DEFAULT (datetime('now')))`,
      `CREATE TABLE IF NOT EXISTS asmi_event_photos (
         id INTEGER PRIMARY KEY AUTOINCREMENT, event_slug TEXT NOT NULL, src TEXT NOT NULL,
         created_at TEXT NOT NULL DEFAULT (datetime('now')))`,
    ])
    .then(() => undefined)
    .catch((e) => { ready = null; throw e; });
  return ready;
}
