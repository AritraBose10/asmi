/**
 * ABSAT registration → Google Sheet (Apps Script web app)
 *
 * SETUP
 * 1. Open the Google Sheet → Extensions → Apps Script. Paste this whole file.
 * 2. Change SECRET below to a long random string. Use the same value for
 *    ABSAT_SHEET_SECRET in the website's environment.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as:      Me
 *      Who has access:  Anyone
 *    Authorise when asked, then copy the Web app URL (ends in /exec).
 *    Set it as ABSAT_SHEET_WEBHOOK_URL in the website's environment.
 * 4. After editing this script later: Deploy → Manage deployments → edit →
 *    Version: New version. (The /exec URL stays the same.)
 *
 * Rows go to a tab named "ABSAT Registrations", created with headers on the
 * first submission.
 */

const SECRET = 'CHANGE-ME-to-a-long-random-string';
const SHEET_NAME = 'ABSAT Registrations';
const HEADERS = [
  'Submitted at', 'Full name', 'Email', 'Mobile', 'State',
  'Consent: processing', 'Consent: marketing', 'Page', 'User agent',
];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: 'bad_json' });
  }
  if (data.secret !== SECRET) return json({ ok: false, error: 'forbidden' });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(),
      safe(data.full_name),
      safe(data.email),
      // Leading apostrophe keeps the number as text (no scientific notation).
      "'" + safe(data.mobile),
      safe(data.state),
      data.consent_processing ? 'Yes' : 'No',
      data.consent_marketing ? 'Yes' : 'No',
      safe(data.page),
      safe(data.user_agent),
    ]);
  } finally {
    lock.releaseLock();
  }
  return json({ ok: true });
}

/** Stops values starting with = + - @ being run as spreadsheet formulas. */
function safe(v) {
  const s = v == null ? '' : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
