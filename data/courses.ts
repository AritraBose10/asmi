/**
 * Three-month certificate courses. Copy is verbatim from asmibschool.com
 * (marketing.html, hr.html, entrepreneur.html), re-scraped 2026-11-24.
 * Course fees are not published — the live site says "Enquire Now".
 */

export interface Course {
  slug: string;
  code: string;
  name: string;
  /** Title of the certification awarded on completion. */
  certification: string;
  titleHtml: string;
  tagline: string;
  summary: string;
  intro: string[];
  modules: string[];
  why: string[];
  outcomes: string[];
  /** For students. */
  internships: string[];
  /** For working professionals. */
  progression: string[];
  /** Page on the old site, kept for reference. */
  legacyUrl: string;
}

export const COURSES: Course[] = [
  {
    slug: 'marketing-4-0',
    code: 'Marketing 4.0',
    name: 'Marketing 4.0',
    certification: 'Mastering Tomorrow’s Marketing Today Certification',
    titleHtml: 'Marketing 4.0<br /><em>Mastering Tomorrow’s Marketing Today</em>',
    tagline: 'Mastering Tomorrow’s Marketing Today',
    summary: 'Digital strategy, data-driven marketing, content and storytelling, and emerging technologies — in three months of physical classes.',
    intro: [
      'Are you ready to revolutionize your marketing career? Whether you’re a student looking to kickstart your career or a working professional seeking career progression, this program is perfect for you.',
    ],
    modules: [
      'Fundamentals of Marketing',
      'Digital Marketing Strategies',
      'Data-Driven Marketing',
      'Content Marketing and Storytelling',
      'Mobile Marketing and Emerging Technologies',
    ],
    why: [
      'Learn from expert instructors in the field',
      'Gain hands-on experience through real-world case studies',
      'Access internships and placements with industry leaders',
      'Receive career guidance for successful career progression',
      'Connect with industry professionals to expand your network',
      'Earn a prestigious Mastering Tomorrow’s Marketing Today Certification upon completion',
    ],
    outcomes: [
      'Gain a deep understanding of Mastering Tomorrow’s Marketing Today principles and strategies',
      'Acquire practical skills in planning, executing and evaluating digital marketing campaigns',
      'Leverage data and analytics to optimize marketing efforts and drive business growth',
      'Master content creation and storytelling for engaging your target audience',
      'Stay updated with the latest trends and technologies in the marketing industry',
    ],
    internships: [
      'Participate in internships with leading companies',
      'Apply your skills in real-world settings',
      'Build a strong foundation for a successful marketing career',
      'Access our extensive industry network for excellent internship opportunities',
    ],
    progression: [
      'Enhance your skillset and unlock new career opportunities',
      'Take on more challenging roles and responsibilities',
      'Navigate your career path with our career guidance and support',
      'Expand your professional network through networking opportunities',
    ],
    legacyUrl: 'https://asmibschool.com/marketing.html',
  },
  {
    slug: 'hr-4-0',
    code: 'HR 4.0',
    name: 'Human Resource 4.0',
    certification: 'Redefining HR Excellence Certification',
    titleHtml: 'Human Resource 4.0<br /><em>Redefining HR Excellence</em>',
    tagline: 'Redefining HR Excellence',
    summary: 'Technology and automation in HR, talent management, employee engagement and data-driven HR analytics — in three months of physical classes.',
    intro: [
      'Are you ready to embark on a transformative journey into the world of Human Resources 4.0? Our comprehensive 3-month certification program is designed to equip students and professionals with the skills and knowledge needed to excel in the rapidly evolving field of HR.',
      'Redefining HR Excellence represents the convergence of technology, data analytics and human resources, creating new opportunities and challenges for HR professionals. By enrolling in our program, you will gain a deep understanding of the latest trends, tools and strategies that define Redefining HR Excellence.',
    ],
    modules: [
      'Introduction to Redefining HR Excellence',
      'Technology and Automation in HR',
      'Talent Management in the Digital Age',
      'Employee Engagement and Well-being Strategies',
      'Data-Driven HR Analytics and Decision-making',
    ],
    why: [
      'Learn from industry experts with vast HR experience',
      'Hands-on learning through real-world case studies',
      'Access internships and placements with industry leaders',
      'Receive career guidance for successful career progression',
      'Earn a prestigious Redefining HR Excellence Certification upon completion',
    ],
    outcomes: [
      'Gain a deep understanding of Redefining HR Excellence principles and strategies',
      'Acquire practical skills in leveraging technology for HR processes',
      'Learn effective talent management and employee engagement techniques',
      'Enhance your knowledge of data-driven HR analytics and decision-making',
    ],
    internships: [
      'Access internships with leading organizations',
      'Apply Redefining HR Excellence concepts in real-world settings',
      'Build a strong foundation for a successful HR career',
      'Benefit from our extensive industry network for internship opportunities',
    ],
    progression: [
      'Unlock new career opportunities with advanced Redefining HR Excellence skills',
      'Take on strategic HR roles and responsibilities',
      'Receive career guidance and support for career advancement',
      'Expand your professional network through networking opportunities',
    ],
    legacyUrl: 'https://asmibschool.com/hr.html',
  },
  {
    slug: 'entrepreneurship-4-0',
    code: 'Entrepreneurship 4.0',
    name: 'Entrepreneurship 4.0',
    certification: 'Catalyzing Entrepreneurial Excellence Certification',
    titleHtml: 'Entrepreneurship 4.0<br /><em>Catalyzing Entrepreneurial Excellence</em>',
    tagline: 'Catalyzing Entrepreneurial Excellence',
    summary: 'Ideation, digital branding, startup finance and scaling strategies — in three months of physical classes.',
    intro: [
      'Ignite your entrepreneurial spirit with our short-term 3-month certification program. Discover the latest strategies and skills in Catalyzing Entrepreneurial Excellence, designed to empower you to thrive in the digital era.',
    ],
    modules: [
      'Introduction to Catalyzing Entrepreneurial Excellence',
      'Ideation and Opportunity Recognition',
      'Digital Marketing and Branding for Entrepreneurs',
      'Financial Management for Startups',
      'Scaling and Growth Strategies',
    ],
    why: [
      'Learn from experienced entrepreneurs and industry experts',
      'Hands-on learning through real-world case studies and practical exercises',
      'Access internships and placements with startup organizations',
      'Receive career guidance for successful entrepreneurial journey',
      'Earn a prestigious Catalyzing Entrepreneurial Excellence Certification upon completion',
    ],
    outcomes: [
      'Gain a deep understanding of Catalyzing Entrepreneurial Excellence principles and strategies',
      'Acquire practical skills in idea generation and opportunity recognition',
      'Learn effective digital marketing and branding techniques for startups',
      'Enhance your financial management knowledge for entrepreneurial success',
      'Develop strategies for scaling and growing your business',
    ],
    internships: [
      'Access internships with startup organizations',
      'Apply Catalyzing Entrepreneurial Excellence concepts in real-world settings',
      'Gain hands-on experience in startup operations',
      'Build a strong foundation for a successful entrepreneurial career',
      'Benefit from our extensive industry network for internship opportunities',
    ],
    progression: [
      'Unlock new career opportunities in the entrepreneurial ecosystem',
      'Learn key skills to launch your own startup or join a startup team',
      'Receive career guidance and support for entrepreneurial career progression',
      'Expand your professional network through networking opportunities',
    ],
    legacyUrl: 'https://asmibschool.com/entrepreneur.html',
  },
];

export const COURSE_FACTS = [
  { label: 'Duration', value: '3 Months' },
  { label: 'Format', value: 'Physical Classes' },
  { label: 'Seats', value: 'Limited' },
  { label: 'Open To', value: 'Students & Working Professionals' },
  { label: 'Course Fee', value: 'On Enquiry' },
];

export const getCourse = (slug: string) => COURSES.find((c) => c.slug === slug);
