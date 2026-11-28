/**
 * Application form definition. Field names and options mirror
 * https://asmibschool.com/apply.html. Shared by the client form and the API route
 * so validation never drifts.
 */
export const COURSES = ['Master in Business Administration', 'Bachelor of Business Administration'] as const;
export const GENDERS = ['Male', 'Female', 'Other'] as const;
export const NATIONALITIES = ['Indian', 'Other'] as const;
export const EDUCATION = [
  'High School Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'Doctorate',
  'Other (please specify)',
] as const;
export const PROGRAMS = ['Master of Business Administration (MBA)', 'Bachelor of Business Administration (BBA)'] as const;

export const ESSAY_MAX_WORDS = 300;

export const ESSAYS = [
  { name: 'essay1', q: 'Why are you interested in pursuing a business education at ASMI Business School?' },
  { name: 'essay2', q: 'What skills and experiences do you bring that will contribute to the ASMI Business School community?' },
  { name: 'essay3', q: 'How do you envision applying your business education in your future career?' },
] as const;

export const APPLY_STEPS = [
  { key: 'personal', title: 'About you', blurb: 'Name, birth date and nationality.' },
  { key: 'contact', title: 'Contact', blurb: 'Where and how we can reach you.' },
  { key: 'academic', title: 'Academics', blurb: 'Course, education and experience.' },
  { key: 'declare', title: 'Statement', blurb: 'Essays and your declaration.' },
] as const;

/** Every field the API accepts, with the label written to the sheet header. */
export const FIELDS: { name: string; label: string; required: boolean; max: number }[] = [
  { name: 'course', label: 'Course', required: true, max: 80 },
  { name: 'fname', label: 'First Name', required: true, max: 60 },
  { name: 'mname', label: 'Middle Name', required: false, max: 60 },
  { name: 'lname', label: 'Last Name', required: true, max: 60 },
  { name: 'dob', label: 'Date of Birth', required: true, max: 10 },
  { name: 'gender', label: 'Gender', required: true, max: 20 },
  { name: 'nationality', label: 'Nationality', required: true, max: 60 },
  { name: 'address', label: 'Address', required: true, max: 200 },
  { name: 'street', label: 'Street Address', required: true, max: 200 },
  { name: 'city', label: 'City', required: true, max: 80 },
  { name: 'state', label: 'State/Province', required: true, max: 80 },
  { name: 'zip', label: 'ZIP/Postal Code', required: true, max: 12 },
  { name: 'country', label: 'Country', required: true, max: 80 },
  { name: 'email', label: 'Email', required: true, max: 120 },
  { name: 'mobile', label: 'Mobile', required: true, max: 15 },
  { name: 'altPhone', label: 'Alternate Phone', required: false, max: 15 },
  { name: 'education', label: 'Highest Education', required: true, max: 80 },
  { name: 'educationOther', label: 'Education (Other)', required: false, max: 120 },
  { name: 'institution', label: 'Last Institution', required: true, max: 160 },
  { name: 'institutionLocation', label: 'Institution Location', required: true, max: 120 },
  { name: 'degree', label: 'Degree Obtained', required: true, max: 120 },
  { name: 'gradYear', label: 'Graduation Year', required: true, max: 4 },
  { name: 'program', label: 'Program Applied For', required: false, max: 80 },
  { name: 'workYears', label: 'Years of Work Experience', required: false, max: 3 },
  { name: 'company', label: 'Company', required: false, max: 120 },
  { name: 'jobTitle', label: 'Job Title', required: false, max: 120 },
  { name: 'jobStart', label: 'Employment Start Date', required: false, max: 10 },
  { name: 'jobDesc', label: 'Responsibilities', required: false, max: 1200 },
  { name: 'essay1', label: 'Essay 1', required: false, max: 2400 },
  { name: 'essay2', label: 'Essay 2', required: false, max: 2400 },
  { name: 'essay3', label: 'Essay 3', required: false, max: 2400 },
  { name: 'signName', label: 'Applicant Full Name', required: true, max: 160 },
  { name: 'signDate', label: 'Declaration Date', required: true, max: 10 },
];

export const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
