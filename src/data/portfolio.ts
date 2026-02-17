import {
  Project, Experience, Achievement,
  // Publication, 
  Certification, Skill, Mentorship, Volunteering
} from '../types';

export const personalInfo = {
  name: 'Saurabh Yadav',
  title: 'AI / ML Engineer',
  university: 'Koneru Lakshmaiah University, Guntur, Andhra Pradesh',
  duration: '2024 – 2027',
  cgpa: '9.61 / 10',
  email: 'saurabhklu.ai@gmail.com',
  phone: '+91 9792453534',
  linkedin: 'https://www.linkedin.com/in/wraithklu',
  github: 'https://github.com/wraith-klu',
  portfolio: 'https://wraithklu.vercel.app',
  taglines: [
    'AI / ML Backend Engineer',
    'Software Developer',
    'Generative AI Developer',
    'Machine Learning Engineer',
    'Backend Systems Engineer',
  ],
  bio: `Computer Science undergraduate specializing in AI-Driven Language Technology, Generative AI, and scalable backend engineering, currently pursuing B.Tech in CSE at Koneru Lakshmaiah University with a GPA of 9.61. Experienced in architecting production-grade intelligent systems, real-time inference pipelines, and high-performance APIs. Proficient in FastAPI, Spring Boot, advanced NLP, LLM-powered architectures, and cloud-native deployment. Focused on building robust language-centric AI systems that transform complex data into actionable intelligence at scale.`
};


export const experiences: Experience[] = [
  {
    company: 'AWS Academy — AICTE EduSkills',
    role: 'AI-ML Virtual Intern (Cohort 12)',
    duration: 'Apr 2025 – Jun 2025',
    description: [
      'Configured and deployed AWS cloud infrastructure including EC2 instances, VPCs, and IAM roles following Well-Architected Framework principles for secure and cost-efficient systems.',
      'Built multiple end-to-end machine learning pipelines using Amazon SageMaker for NLP and computer vision tasks on real-world datasets.',
      'Improved model performance through hyperparameter tuning and data preprocessing techniques.',
      'Integrated AWS services with ML workflows to enable automated training, deployment, and scalable inference.'
    ],
    techStack: [
      'AWS EC2',
      'IAM',
      'VPC',
      'Amazon SageMaker',
      'Python',
      'Machine Learning',
      'NLP',
      'Cloud Deployment'
    ]
  },
  {
    company: 'Participant — Industry-led learnathons and hackathons (AI/ML Domain) @KLUniversity',
    role: 'AI Project Developer — ToxiGuard AI (Ongoing)',
    duration: 'Aug 2025 – Present',
    description: [
      'Designing and building a real-time toxicity detection platform using NLP pipelines, machine learning models, and LLM-based contextual moderation.',
      'Implementing scalable backend APIs with FastAPI and deploying cloud-hosted services for real-time inference.',
      'Developing an interactive analytics dashboard with visualizations, keyword insights, and export capabilities.',
      'Collaborating under faculty and industry mentorship to prepare for final hackathon evaluation.'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'React (Vite)',
      'NLP',
      'Machine Learning',
      'LLM',
      'Plotly',
      'Cloud Deployment'
    ]
  }
];


export const projects: Project[] = [
  {
    title: 'CodeSentinel AI — Intelligent Code Smell Detection System',
    description: 'Developed an AI-powered static code analysis platform to detect code smells using AST-based parsing, machine learning models, and LLM reasoning. Supports real-time follow-up queries for deeper code understanding and generates PDF reports with optimization suggestions. Improves software quality by identifying issues such as long methods, duplicate code, god classes, and poor naming practices.',
    techStack: ['Python', 'FastAPI', 'Streamlit', 'LLM', 'AST', 'Machine Learning'],
    liveUrl: 'https://codesentinel.streamlit.app/',
    githubUrl: 'https://github.com/Wraith-klu/CodeSentinel-Ai',
    featured: true
  },
  {
    title: 'ToxiGuard AI — Real-Time Toxicity Detection Platform',
    description: 'Engineered a hybrid NLP moderation system for real-time detection of abusive and toxic language with sentiment analysis, severity scoring, and keyword highlighting. Combines ML models with LLM fallback for contextual moderation and includes an analytics dashboard with KPIs, charts, word clouds, history tracking, and CSV export.',
    techStack: ['Python', 'FastAPI', 'React', 'NLP', 'Machine Learning', 'LLM', 'Plotly'],
    liveUrl: 'https://toxiguard-ai.vercel.app',
    githubUrl: 'https://github.com/wraith-klu/ToxiGuard-AI',
    featured: true
  },
  {
    title: 'Nexus Finance Bank — Full Stack Banking Application',
    description: 'Architected a secure full-stack banking system supporting fund transfers, transaction history, and account management. Implemented JWT-based authentication, modular REST APIs, and containerized deployment using Docker Compose for reproducible environments and CI/CD readiness.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs', 'JWT'],
    liveUrl: 'https://nexus-finance-bank-frontend-ex4r.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/NexusFinanceBank1.git',
    featured: false
  },
  {
    title: 'Pathways — Online Job Application Tracker',
    description: 'Built a job application tracking system with role-based access control (Admin/User), secure authentication, and optimized REST APIs. Designed to manage job postings, application status, and workflow tracking for multiple users with improved response performance.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
    liveUrl: 'https://pathways-jobsearchengine.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/Pathway.git',
    featured: false
  },
  {
    title: 'Strive Rides — Ride Booking Application (Hackathon Project)',
    description: 'Developed a ride-booking platform featuring real-time tracking, booking workflows, and backend services for ride management. Built during Code4Change Hackathon as a scalable transportation solution.',
    techStack: ['React.js', 'Spring Boot', 'MySQL'],
    featured: false
  }
];


export const achievements: Achievement[] = [
  {
    title: 'Top 1% of CSE Department',
    organization: 'Koneru Lakshmaiah University',
    year: '2024–Present',
    description: 'Ranked among the top 1% of the Computer Science department with an exceptional GPA of 9.61, demonstrating consistent academic excellence.'
  },
  {
    title: 'Finalist — Code4Change Hackathon',
    organization: 'KL University — The Startup Society',
    year: '2025',
    description: 'Led a team to develop a ride-booking application (Strive Rides) during the hackathon, showcasing full-stack development and problem-solving skills.'
  },
  {
    title: 'Solved 500+ DSA Problems',
    organization: 'LeetCode, Codeforces, CodeChef, HackerRank',
    year: 'Ongoing',
    description: 'Strengthened algorithmic thinking and coding efficiency by solving 500+ problems across major competitive programming platforms.'
  },
  {
    title: 'AWS AI-ML Virtual Internship',
    organization: 'AICTE — AWS Academy',
    year: '2025',
    description: 'Completed a structured internship covering cloud infrastructure, machine learning pipelines, NLP, and deployment using AWS services including EC2, IAM, VPC, and SageMaker.'
  },
  {
    title: 'U-19 District Cricket Player',
    organization: 'Lucknow District Team',
    year: '2022–2024',
    description: 'Represented district-level cricket team, demonstrating teamwork, discipline, and high performance under competitive conditions.'
  },
  {
    title: 'Competitive Programming Participant',
    organization: 'Codeforces, CodeChef, LeetCode',
    year: 'Ongoing',
    description: 'Actively participates in coding contests and problem-solving challenges to improve speed, accuracy, and advanced algorithmic skills.'
  }
];


// export const publications: Publication[] = [
//   {
//     title: 'Redefining Medicine: The Power of Generative AI in Modern Healthcare',
//     venue: '5th International Conference on Smart Electronics and Communication (ICOSEC 2024), IEEE Xplore',
//     year: '2024',
//     type: 'conference',
//     url: 'https://ieeexplore.ieee.org/document/10722592'
//   },
//   {
//     title: 'Generative AI for Computational Creativity: Enhancing Code Development and Content Production',
//     venue: '4th International Conference on Deep Sciences for Computing and Communications, SRMIST, Universiti Putra Malaysia',
//     year: '2024',
//     type: 'conference',
//     url: 'https://springer.com'
//   }
// ];

export const certifications: Certification[] = [
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'IBM — Coursera',
    year: '2025',
    url: 'https://coursera.org/share/96bc8343299ada8785330ddfabfa4c32'
  },
  {
    title: 'Dynamic Programming & Greedy Algorithms',
    issuer: 'University of Colorado Boulder — Coursera',
    year: '2025',
    url: 'https://coursera.org/share/db94b7e363acb37b59be329c428fdf9d'
  },
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'AWS Academy',
    year: '2025',
    url: 'https://www.credly.com/badges/59e6100c-43d1-4440-9582-52bc2ee07f47/public_url'
  },
  {
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    issuer: 'AWS Academy',
    year: '2025',
    url: 'https://www.credly.com/badges/9b9f3fee-90e7-4f41-b7bd-4a5f6bbd6630/public_url'
  },
  {
    title: 'Spring — Ecosystem and Core',
    issuer: 'LearnQuest — Coursera',
    year: '2025',
    url: 'https://coursera.org/share/f9921946fdb19afa1cb9863dcf13b7b8'
  },
  {
    title: 'Supervised Machine Learning: Regression',
    issuer: 'IBM — Coursera',
    year: '2025',
    url: 'https://coursera.org/share/b408d9a2e90619088ca04d2540be0138'
  }
];


export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 95, category: 'languages' },
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'JavaScript', level: 80, category: 'languages' },
  { name: 'SQL', level: 85, category: 'languages' },
  { name: 'HTML', level: 85, category: 'languages' },
  { name: 'CSS', level: 80, category: 'languages' },

  // Frameworks & Backend
  { name: 'FastAPI', level: 92, category: 'frameworks' },
  { name: 'Spring Boot', level: 90, category: 'frameworks' },
  { name: 'React.js', level: 82, category: 'frameworks' },
  { name: 'Next.js', level: 80, category: 'frameworks' },
  { name: 'REST APIs', level: 92, category: 'frameworks' },
  { name: 'JWT Authentication', level: 88, category: 'frameworks' },
  { name: 'Docker', level: 85, category: 'frameworks' },

  // AI / Machine Learning — Top 15
  { name: 'Prompt Engineering', level: 95, category: 'ai' },
  { name: 'RAG Systems', level: 92, category: 'ai' },
  { name: 'LLMs (GPT, LLaMA)', level: 90, category: 'ai' },
  { name: 'Natural Language Processing', level: 92, category: 'ai' },
  { name: 'scikit-learn', level: 90, category: 'ai' },
  { name: 'ML Pipelines', level: 90, category: 'ai' },
  { name: 'Model Tuning', level: 88, category: 'ai' },
  { name: 'Feature Engineering', level: 88, category: 'ai' },

  // GenAI / LLM Stack
  { name: 'OpenAI API', level: 92, category: 'ai' },
  { name: 'LangChain', level: 90, category: 'ai' },
  { name: 'Fine-tuning', level: 85, category: 'ai' },
  { name: 'Agentic AI', level: 82, category: 'ai' },

  // Computer Science Fundamentals
  { name: 'Data Structures and Algorithms', level: 90, category: 'languages' },
  { name: 'System Design Basics', level: 85, category: 'languages' },

  // Databases & Tools
  { name: 'PostgreSQL', level: 88, category: 'tools' },
  { name: 'MySQL', level: 85, category: 'tools' },
  { name: 'Git / GitHub', level: 90, category: 'tools' },
  { name: 'Linux', level: 88, category: 'tools' },
  { name: 'AWS', level: 82, category: 'tools' },
  { name: 'Streamlit', level: 85, category: 'tools' }
];


// Add mentorship programs
export const mentorships: Mentorship[] = [
  {
    program: 'Hackathon Participation',
    organization: 'KL University',
    duration: '2024–25',
    description: 'Participated in technical competitions and collaborative development events, including Code4Change Hackathon finalist.',
    role: 'mentee',
    selectionProcess: 'Open participation'
  }
];


// Add volunteering and leadership experiences
export const volunteering: Volunteering[] = [
  {
    organization: 'Community Impact & Learning',
    role: 'Technology Enthusiast',
    duration: 'Ongoing',
    description: 'Ready to learn new technologies to work on any kind of project. I have the ability to adapt to any kind of technologies from scratch even if I am not that proficient initially. Passionate About Community Impact: I believe in giving back to the community through active participation in technical events, mentoring fellow students, and contributing to open-source projects that benefit everyone.',
    impact: 'Continuous learning mindset and community-focused approach'
  }
];