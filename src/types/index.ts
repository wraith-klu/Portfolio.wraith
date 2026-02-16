export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  techStack: string[];
  logo?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  prize?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  url?: string;
  type: 'conference' | 'journal';
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'ai' | 'tools';
}

export interface Mentorship {
  program: string;
  organization: string;
  duration: string;
  description: string;
  role: 'mentee' | 'mentor';
  selectionProcess?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  duration: string;
  description: string;
  impact?: string;
}