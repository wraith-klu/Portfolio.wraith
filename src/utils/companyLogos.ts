/**
 * Company logo URL resolver.
 * Uses Clearbit Logo API for high-quality square logos.
 * Falls back to Google Favicon API for anything not in the map.
 */

const logoMap: Record<string, string> = {
  // Experience
  'AWS Academy': '/aws_academy.png',
  'AWS Academy — EduSkills': '/aws_academy.png',
  'EduSkills — AWS Academy': '/aws_academy.png',
  'EduSkills': '/aws_academy.png',
  'KL University': 'https://logo.clearbit.com/kluniversity.in',
  'Koneru Lakshmaiah University': 'https://logo.clearbit.com/kluniversity.in',
  'KL University — The Startup Society': 'https://logo.clearbit.com/kluniversity.in',
  'Participant — Industry-led learnathons and hackathons (AI/ML Domain) @KLUniversity': '/toxiguard.png',

  // Certifications
  'Microsoft': '/microsoft.png',
  'IBM': '/ibm.png',
  'IBM — Coursera': '/ibm.png',
  'Coursera': '/coursera.png',
  'University of Colorado Boulder — Coursera': '/uc_boulder.png',
  'LearnQuest — Coursera': '/coursera.png',
  'Amazon': '/aws_academy.png',

  // Achievements / Platforms
  'LeetCode': 'https://logo.clearbit.com/leetcode.com',
  'LeetCode, Codeforces, CodeChef, HackerRank': 'https://logo.clearbit.com/leetcode.com',
  'Codeforces, CodeChef, LeetCode': 'https://logo.clearbit.com/codeforces.com',
  'Codeforces': 'https://logo.clearbit.com/codeforces.com',
  'HackerRank': 'https://logo.clearbit.com/hackerrank.com',
  'Lucknow District Team': '', // no logo — use initials fallback

  // Mentorships / Volunteering
  'Community Impact & Learning': '',
};

/**
 * Returns a logo URL for the given company/organization name.
 * Falls back to Google Favicon API if not in map.
 */
export const getCompanyLogo = (company: string): string => {
  // Direct match
  if (company in logoMap) return logoMap[company];

  // Partial match — find first key that is contained in company string
  const key = Object.keys(logoMap).find(
    k => k && company.toLowerCase().includes(k.toLowerCase())
  );
  if (key && logoMap[key]) return logoMap[key];

  // Last resort: Google Favicon API — infer domain from company name
  const normalized = company
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .trim()
    .split(' ')[0]; // use first word as domain guess
  return `https://www.google.com/s2/favicons?domain=${normalized}.com&sz=128`;
};

/**
 * Returns text initials from a company name (max 2 chars).
 */
export const getInitials = (name: string): string => {
  const parts = name.replace(/[^a-zA-Z ]/g, ' ').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};
