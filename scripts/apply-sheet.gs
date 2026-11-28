/**
 * Google Apps Script — receives Apply Now submissions and appends them to a sheet tab.
 *
 * Setup (once):
 *  1. Open the Google Sheet → Extensions → Apps Script. Paste this file.
 *  2. Project Settings → Script properties → add SECRET = the same value as ABSAT_SHEET_SECRET.
 *  3. Deploy → New deployment → Web app. Execute as: Me. Who has access: Anyone.
 *  4. Put the /exec URL in ABSAT_SHEET_WEBHOOK_URL (already set if you reuse the ABSAT script —
 *     in that case just merge doPost below with the existing one: it routes on body.form === 'apply').
 *
 * Rows go to a tab named "Applications" (created with a header row on first submit).
 */
var HEADERS = [
  'Submitted At', 'Course', 'First Name', 'Middle Name', 'Last Name', 'Date of Birth', 'Gender', 'Nationality',
  'Address', 'Street Address', 'City', 'State/Province', 'ZIP/Postal Code', 'Country', 'Email', 'Mobile',
  'Alternate Phone', 'Highest Education', 'Education (Other)', 'Last Institution', 'Institution Location',
  'Degree Obtained', 'Graduation Year', 'Program Applied For', 'Years of Work Experience', 'Company',
  'Job Title', 'Employment Start Date', 'Responsibilities', 'Essay 1', 'Essay 2', 'Essay 3',
  'Applicant Full Name', 'Declaration Date'
];
var KEYS = [
  'course', 'fname', 'mname', 'lname', 'dob', 'gender', 'nationality', 'address', 'street', 'city', 'state',
  'zip', 'country', 'email', 'mobile', 'altPhone', 'education', 'educationOther', 'institution',
  'institutionLocation', 'degree', 'gradYear', 'program', 'workYears', 'company', 'jobTitle', 'jobStart',
  'jobDesc', 'essay1', 'essay2', 'essay3', 'signName', 'signDate'
];

function doPost(e) {
  var out = function (o) {
    return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  };
  try {
    var body = JSON.parse(e.postData.contents);
    if (body.secret !== PropertiesService.getScriptProperties().getProperty('SECRET')) return out({ ok: false });
    if (body.form !== 'apply') return out({ ok: false, error: 'unknown form' }); // merge ABSAT handling here

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName('Applications') || ss.insertSheet('Applications');
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }
    var d = body.data || {};
    var row = [body.submittedAt];
    KEYS.forEach(function (k) {
      var v = String(d[k] == null ? '' : d[k]);
      // Neutralise spreadsheet formula injection.
      row.push(/^[=+\-@]/.test(v) ? "'" + v : v);
    });
    sh.appendRow(row);
    lock.releaseLock();
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}
