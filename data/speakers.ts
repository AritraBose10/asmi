/**
 * ASMi Speaker Directory — April to September 2026
 *
 * Transcribed from data/ASMi_Speaker_Directory_April_September_2026 (2).docx.
 * Unlike most campus content in this repo, every entry here is real: names,
 * designations, dates and event titles come straight from that directory.
 *
 * Two lists, exactly as the source separates them:
 *   SESSIONS  — sessions with a dated report on file
 *   SCHEDULED — entries in the Excel schedule whose report/photo was not found
 *               when the directory was compiled
 *
 * `facultySlug` cross-links a speaker who also appears in data/people.ts.
 */

export interface Speaker {
  date: string;            // ISO
  name: string;
  designation: string;
  org?: string;
  event: string;
  /** Source report filename, for the records team. Not rendered. */
  reportSource?: string;
  facultySlug?: string;
  /** /photos/speakers/<slug>.jpg */
  photo?: string;
}

export const SESSIONS: Speaker[] = [
  {
    date: '2026-08-19',
    name: 'Mainak Roy',
    designation: 'Financial Controller',
    org: 'London Borough of Brent, London',
    event: 'The ASMi Finance Marathon 2026',
    reportSource: '19.8.26 FINANCE MARATHON REPORT_ASMI_2026-2027 (1).pdf',
  },
  {
    date: '2026-08-26',
    name: 'Pilar Parodi Felix',
    designation: 'Director',
    org: 'Deauville Green Awards',
    event: 'I Am The Future — Movie Screening & Creator Fireside Chat',
    reportSource: '26.8.26 FILM SCREENING REPORT (1).pdf',
  },
  {
    date: '2026-09-01',
    name: 'Prof. Atanu Chaudhuri',
    designation: 'Professor of Technology and Operations Management',
    org: 'Durham University Business School, UK',
    event: 'Session on Supply Chain Management',
    reportSource: '1.9.26 ASMI_Supply_Chain_Management_Session_Report_2026-1.docx',
  },
  {
    date: '2026-09-08',
    name: 'Mr. Reeju Pathak',
    designation: 'PGT Teacher, Eklavya Model School, Bankura; Founder, Voice & Verse',
    event: 'Finding Your Voice: Confidence Beyond Language',
    reportSource: '8.9.26 Session Sharing-Finding Your Voice.pdf',
  },
  {
    date: '2026-09-16',
    name: 'CA Rahul Rungta',
    designation: 'Chartered Accountant (CA) & CFA',
    event: 'ICAI Career Counselling & Awareness Session',
    reportSource: '16.09.26 BBA (2026-30) ICAI Career Counselling Awareness.pdf',
    facultySlug: 'rahul-rungta',
  },
  {
    date: '2026-09-22',
    name: 'Mr. Aman Bakshi',
    designation: 'Manager, Industrial Engagements & Senior AI & Data Scientist',
    org: 'IBM',
    event: 'IBM Day: TechnoVate 2026',
    reportSource: '22.9.26 IBM Day Technovate 2026 Report.pdf',
  },
  {
    date: '2026-09-22',
    name: 'Mr. Robin Tyagi',
    designation: 'Quality Analyst & Cloud Application Developer',
    org: 'IBM',
    event: 'IBM Day: TechnoVate 2026',
    reportSource: '22.9.26 IBM Day Technovate 2026 Report.pdf',
  },
  {
    date: '2026-10-06',
    name: 'Samhita Dutta',
    designation: 'Head HR & Global Operations',
    org: 'A4 Technologies Solutions Inc., USA',
    event: 'Corporate Connect Session',
  },
];

/**
 * In the schedule, report or photo not yet on file. Listed separately so the
 * page never implies a session is documented when it is not.
 * ("Principal" below is spelled "Principle" in the source — obvious typo.)
 */
export const SCHEDULED: Speaker[] = [
  {
    date: '2026-08-11',
    name: 'Neha Mishra',
    designation: 'LinkedIn Brand Strategist; Co-Founder, InstaInker; Founder, Consult Global',
    event: 'Scheduled session',
  },
  {
    date: '2026-08-11',
    name: 'CA Nikhil Bajaj',
    designation: 'Founder & Managing Partner, VSNB & Associates; Co-Founder, InstaInker',
    event: 'Scheduled session',
  },
  {
    date: '2026-09-24',
    name: 'Mr. Hritavash Saha',
    designation: 'Growth Marketing Lead',
    org: 'APPSeCONNECT',
    event: 'Scheduled session',
  },
  {
    date: '2026-09-24',
    name: 'Mr. Arindam Tagore',
    designation: 'Senior Tax Professional & US Enrolled Agent',
    event: 'Scheduled session',
  },
  {
    date: '2026-09-29',
    name: 'Dr. Niloy Biswas',
    designation: 'Senior Vice President & Group HR Head',
    org: 'EMC Limited',
    event: 'Scheduled session',
  },
  {
    date: '2026-09-30',
    name: 'Kaushik Raha',
    designation: 'Principal AI Strategist & GTM Specialist',
    org: 'AWS, US',
    event: 'Scheduled session',
  },
];

/** "MR" from "Mainak Roy", ignoring honorifics. */
export function monogram(name: string): string {
  const skip = /^(mr|mrs|ms|dr|prof|ca)\.?$/i;
  const parts = name.split(/\s+/).filter((w) => !skip.test(w));
  return parts.slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

/** 2026-08-19 → "19 Aug 2026" */
export function speakerDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  });
}

export const DIRECTORY_PERIOD = 'April – September 2026';

/** Organisations represented across both lists, for the summary strip. */
export const SPEAKER_ORGS = [
  'IBM', 'Durham University Business School', 'London Borough of Brent',
  'Deauville Green Awards', 'AWS', 'EMC Limited', 'APPSeCONNECT',
  'A4 Technologies Solutions', 'ICAI', 'VSNB & Associates', 'Voice & Verse',
];
