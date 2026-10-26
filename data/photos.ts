/**
 * Every photograph on the site, in one place.
 *
 * A slot carries its alt text from the start, so the moment a file is dropped
 * in it is already accessible and described. `src` is the only thing missing.
 *
 *   src        — path under /public. Undefined = awaiting the real photograph.
 *   fallback   — a stock image used meanwhile, so heroes never render bare.
 *   alt        — what the photograph shows. Written for a screen reader, not SEO.
 *   caption    — shown under galleries and bands; optional.
 *   brief      — what to shoot. For the photographer, never rendered.
 *
 * Add a photograph:  set `src: '/photos/<kind>/<name>.jpg'` on the slot.
 */

export interface PhotoSlot {
  src?: string;
  fallback?: string;
  alt: string;
  caption?: string;
  brief?: string;
}

const CAMPUS_STOCK = '/assets/campus-life.png';
const HERO_STOCK = '/assets/hero-bg.png';
const TOUR_STOCK = '/assets/malaysia-tour.png';

// ── Page hero backgrounds ───────────────────────────────────────────────────
export const HERO: Record<string, PhotoSlot> = {
  home: {
    fallback: HERO_STOCK,
    alt: 'ASMi Business School campus at Godrej Genesis, Sector V, Kolkata, at dusk',
    brief: 'Wide establishing shot of the building or Sector V skyline, shot dark or dimmable.',
  },
  programs: {
    fallback: CAMPUS_STOCK,
    alt: 'ASMi students in a case discussion',
    brief: 'A full classroom mid-discussion, wide.',
  },
  mba: { fallback: CAMPUS_STOCK, alt: 'An MBA class in session at ASMi Business School' },
  bba: { fallback: HERO_STOCK, alt: 'BBA students working in the analytics lab' },
  'executive-mba': { fallback: TOUR_STOCK, alt: 'Executive MBA participants in a weekend session' },
  specializations: {
    fallback: CAMPUS_STOCK,
    alt: 'Students working across the specialisation tracks at ASMi',
    brief: 'Small-group work, several tables visible.',
  },
  faculty: {
    fallback: CAMPUS_STOCK,
    alt: 'An ASMi faculty member teaching a seminar',
    brief: 'Faculty member at the front of a room, students in frame.',
  },
  clubs: {
    fallback: CAMPUS_STOCK,
    alt: 'ASMi students running a club session',
    brief: 'Club activity — a committee meeting or competition in progress.',
  },
  events: {
    fallback: TOUR_STOCK,
    alt: 'A full auditorium during an ASMi event',
    brief: 'Wide shot of a packed hall, stage visible.',
  },
  placements: {
    fallback: CAMPUS_STOCK,
    alt: 'An ASMi student in a placement interview',
    brief: 'Interview or offer-day moment; faces of students who have consented.',
  },
  'study-tour': {
    fallback: TOUR_STOCK,
    alt: 'The ASMi cohort on the international study tour in Malaysia',
    brief: 'Group shot abroad, recognisable location behind.',
  },
  'campus-life': {
    fallback: CAMPUS_STOCK,
    alt: 'The ASMi campus on the 15th floor of Godrej Genesis',
    brief: 'Interior wide shot showing the space and the city beyond.',
  },
  gallery: { fallback: CAMPUS_STOCK, alt: 'Photographs from across the ASMi year' },
  blog: { fallback: CAMPUS_STOCK, alt: 'Students reading in the ASMi business library' },
  absat: { fallback: CAMPUS_STOCK, alt: 'Candidates taking a computer-based test' },
  faq: { fallback: CAMPUS_STOCK, alt: 'The ASMi admissions desk' },
  forum: { fallback: CAMPUS_STOCK, alt: 'ASMi students talking between sessions' },
  citations: { fallback: CAMPUS_STOCK, alt: 'The ASMi Business School entrance signage' },
};

// ── Section images, page by page ────────────────────────────────────────────
export const SECTION: Record<string, PhotoSlot> = {
  // Landing page
  homeAbout: {
    fallback: CAMPUS_STOCK,
    alt: 'ASMi students and faculty in conversation on campus',
    brief: 'Candid, warm, people-first. Lands beside the About ASMi copy.',
  },
  homeStudyTour: {
    fallback: TOUR_STOCK,
    alt: 'The ASMi cohort during the Malaysia study tour',
  },
  homePlacements: {
    alt: 'ASMi graduates on offer day',
    caption: 'Offer day, 2023–25 batch',
    brief: 'Celebratory but not staged. Wide strip, 16:6.',
  },
  homeFaculty: {
    alt: 'An ASMi faculty member mid-session',
    caption: 'Teaching on the MBA core',
    brief: 'Faculty at a whiteboard or lectern. Wide strip, 16:6.',
  },

  // Programmes
  programsCampus: {
    alt: 'Students between classes at Godrej Genesis',
    caption: 'Between sessions on the 15th floor',
    brief: 'Corridor or lounge, natural movement.',
  },
  mbaClassroom: {
    alt: 'An MBA case discussion at ASMi Business School',
    caption: 'The case method in the MBA core',
  },
  bbaLab: {
    alt: 'BBA students working in the analytics lab',
    caption: 'Business Analytics, year one',
  },
  embaWeekend: {
    alt: 'Executive MBA participants in a weekend module',
    caption: 'Weekend modules for working professionals',
  },

  // Faculty
  facultyTeaching: {
    alt: 'An ASMi faculty member teaching',
    caption: 'Interactive, participatory, built on live cases',
  },

  // Placements
  placementsRecruiters: {
    alt: 'A recruiter session on the ASMi campus',
    caption: 'Corporate connect, on campus',
  },

  // Study tour
  tourPartner: {
    alt: 'INTI International University campus, Malaysia',
    caption: 'INTI International University, our academic partner',
  },

  // ABSAT
  absatTestCentre: {
    alt: 'A candidate at a computer-based test station',
    caption: 'Remote-proctored or centre-based',
  },

  // Campus life
  campusNeighbourhood: {
    alt: 'Sector V, Kolkata, seen from the ASMi campus',
    caption: 'Sector V, on the doorstep',
  },

  // Blog
  blogFeature: { fallback: CAMPUS_STOCK, alt: 'Featured article illustration' },
};

// ── Campus facilities: one photograph per facility card ─────────────────────
export const FACILITIES: Record<string, PhotoSlot> = {
  library: { alt: 'The business library at ASMi Business School', brief: 'Shelves and study seating.' },
  caseRooms: { alt: 'A tiered case room at ASMi', brief: 'Empty, lit, showing the tiering.' },
  analyticsLab: { alt: 'The analytics lab at ASMi', brief: 'Workstations with screens on.' },
  smartClassrooms: { alt: 'A connected classroom at ASMi', brief: 'Display in use, seats visible.' },
  lounge: { alt: 'The student lounge at ASMi', brief: 'Students using the space.' },
  sectorV: { alt: 'Sector V technology district, Kolkata', brief: 'From the windows, daylight.' },
};

/** Campus gallery (/campus-life and /gallery). */
export const CAMPUS_PHOTOS: PhotoSlot[] = [
  { alt: 'The 15th-floor reception at Godrej Genesis', caption: 'Reception, 15th floor' },
  { alt: 'A case room mid-discussion', caption: 'Case room mid-discussion' },
  { alt: 'The business library', caption: 'The business library' },
  { alt: 'The analytics lab during a Decode club clinic', caption: 'Analytics lab, Decode clinic' },
  { alt: 'The student lounge between sessions', caption: 'Student lounge' },
  { alt: 'Sector V seen from the campus windows', caption: 'Sector V from the windows' },
  { alt: 'A guest lecture in progress', caption: 'Guest lecture' },
  { alt: 'Convocation day at ASMi Business School', caption: 'Convocation' },
  { alt: 'The club fair during orientation week', caption: 'Club fair, orientation' },
];

/** The building itself — Drive folder: "TIU and Asmi Building Pictures". */
export const BUILDING_PHOTOS: PhotoSlot[] = [
  { alt: 'Godrej Genesis, home of ASMi Business School', caption: 'Godrej Genesis, Sector V' },
  { alt: 'The Techno India University campus', caption: 'Techno India University' },
  { alt: 'The ASMi entrance and signage', caption: 'Entrance, 15th floor' },
];

/** Returns the real photograph if present, else the stock stand-in. */
export const photoSrc = (slot?: PhotoSlot) => slot?.src ?? slot?.fallback;

/** True while a slot is still waiting for its real photograph. */
export const isPending = (slot?: PhotoSlot) => Boolean(slot && !slot.src);

/** Every slot that still needs a photograph, for the content team. */
export function pendingSlots() {
  const out: { group: string; key: string; alt: string; brief?: string }[] = [];
  const scan = (group: string, rec: Record<string, PhotoSlot>) =>
    Object.entries(rec).forEach(([key, s]) => {
      if (!s.src) out.push({ group, key, alt: s.alt, brief: s.brief });
    });
  scan('hero', HERO);
  scan('section', SECTION);
  scan('facility', FACILITIES);
  CAMPUS_PHOTOS.forEach((s, i) => !s.src && out.push({ group: 'campus', key: String(i + 1), alt: s.alt }));
  BUILDING_PHOTOS.forEach((s, i) => !s.src && out.push({ group: 'building', key: String(i + 1), alt: s.alt }));
  return out;
}
