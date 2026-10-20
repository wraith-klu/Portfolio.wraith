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
    'AI / ML Systems Engineer',
    'Real-Time LLM & Speech Inference Developer',
    'Applied ML Pipelines & Scalable Backends',
    'Full-Stack AI Developer (FastAPI + React)',
    'Algorithmic Problem Solver (Top 1% CSE • 9.61 GPA)',
  ],
  bio: `Computer Science undergraduate specializing in high-performance AI/ML systems, real-time speech translation (ESP32-S3 + Whisper + NLLB + Piper), and LLM-powered applications at KL University with an exceptional 9.61 GPA (Top 1% CSE). Experienced in architecting production-grade inference pipelines, WebSocket streaming, and cloud deployments on AWS and modern cloud platforms. Combines rigorous competitive programming fundamentals (500+ solved problems) with end-to-end full-stack capabilities (FastAPI, React, PyTorch, Docker) to build reliable, high-speed intelligent systems.`
};


export const experiences: Experience[] = [
  {
    company: 'AWS Academy — EduSkills',
    role: 'AI/ML Intern (Cohort 12)',
    duration: 'Apr 2025 – Jun 2025',
    description: [
      'Architected end-to-end distributed ML training and inference pipelines on Amazon SageMaker, cutting model evaluation turnaround by 42% across heterogeneous NLP and vision datasets.',
      'Configured high-availability AWS cloud infrastructure (EC2, VPC, IAM, S3, CloudWatch) applying AWS Well-Architected Framework principles to achieve sub-100ms model invocation latencies.',
      'Implemented automated hyperparameter tuning (Bayesian Optimization) and automated feature stores, achieving an 8.4% improvement in F1-scores on complex classification tasks.',
      'Integrated MLOps governance and CI/CD triggers to automate model validation, artifact versioning, and zero-downtime endpoint redeployment.'
    ],
    techStack: [
      'Amazon SageMaker',
      'AWS EC2',
      'AWS VPC',
      'IAM & Security',
      'Python',
      'Machine Learning',
      'MLOps',
      'PyTorch',
      'NLP',
      'Sentiment Analysis',
      'LLM',
      'Feature Stores'
    ],
    impactMetrics: [
      { label: 'Turnaround Time', value: '-42%' },
      { label: 'Inference Latency', value: '<100ms' },
      { label: 'F1 Gain', value: '+8.4%' }
    ],
    verifyUrl: 'https://drive.google.com/file/d/1lD2RdVYjhF1glbqrIgwXQacNrC9tqGzh/view?usp=sharing'
  },
  {
    company: 'Industry-Led AI Innovation Labs @KLUniversity',
    role: 'AI Project Developer & Systems Builder (Ongoing)',
    duration: 'Aug 2025 – Present',
    description: [
      'Leading engineering of real-time intelligent platforms (ToxiGuard AI, Norrin AI, Echo Translation) serving live multi-client traffic.',
      'Architected a hybrid moderation engine combining local scikit-learn models with automatic Google Gemini 3.6 Flash / OpenRouter fallback, maintaining zero single-point-of-failure.',
      'Engineered streaming WebSocket protocols and asynchronous background workers (FastAPI, Redis, PostgreSQL) to process audio streams and tabular predictions with sub-second latency.',
      'Collaborating across faculty and industry mentorship while maintaining 100% pytest test suite pass rates and clean containerized builds.'
    ],
    techStack: [
      'FastAPI',
      'Python',
      'PyTorch',
      'LLMs (Gemini/OpenRouter)',
      'Docker',
      'PostgreSQL',
      'Redis',
      'WebSocket',
      'System Architecture'
    ],
    impactMetrics: [
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Test Coverage', value: '100%' },
      { label: 'Mentees Guided', value: '15+' }
    ]
  }
];


export const projects: Project[] = [
  {
    title: 'Norrin AI — Sports Performance Prediction Engine',
    description: 'A real-time, multi-sport performance prediction and analytics platform powered by ensemble machine learning, live weather intelligence, and LLM reasoning (Google Gemini 3.6 Flash & OpenRouter fallback) across Cricket, Football, and NBA with zero-database architecture.',
    techStack: ['Python', 'FastAPI', 'React', 'Three.js', 'Machine Learning', 'scikit-learn', 'LLM', 'Gemini', 'Ensemble ML'],
    liveUrl: 'https://norrin-ai.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/Norrin.AI.git',
    featured: false,
    timing: 'May – July 2026',
    architecture: 'Stateless Ensemble ML + Gemini 3.6 Flash Fallback + WeatherAPI Live Feed',
    metrics: [
      { label: 'Unit Tests', value: '42 (100% Pass)' },
      { label: 'Sports Covered', value: 'Cricket, Football, NBA' },
      { label: 'Database Overhead', value: '0 (Memory-Mapped)' }
    ],
    highlights: [
      'Dual-tier AI reasoning with automatic Gemini 3.6 Flash to OpenRouter failover',
      'Contextual feature engineering incorporating EWMA, rest-days, and live boundary weather',
      'Cyberpunk React 19 + Three.js interactive visualizer with dynamic confidence intervals'
    ]
  },
  {
    title: 'Echo — Real-Time Multilingual Speech Translation System',
    description: 'High-performance backend service for an ESP32-S3 IoT wearable device capturing speech, streaming via WebSocket, transcribing with faster-whisper, translating with NLLB-200, and synthesizing output speech through Piper TTS with PostgreSQL logging.',
    techStack: ['FastAPI', 'Python 3.11', 'WebSocket', 'faster-whisper', 'NLLB-200', 'Piper TTS', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://echo-alpha-agent.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/Echo.git',
    featured: false,
    timing: 'July 2026 – Present',
    architecture: 'ESP32-S3 I2S Mic → WebSocket PCM → Whisper ASR → NLLB-200 MT → Piper TTS (ONNX) → WAV Stream',
    metrics: [
      { label: 'End-to-End Latency', value: '<3.8s CPU / <0.5s GPU' },
      { label: 'Languages Supported', value: '10 Core (NLLB 200 ready)' },
      { label: 'Deployment Stack', value: 'Oracle Cloud VM + Docker' }
    ],
    highlights: [
      'Full duplex WebSocket protocol streaming 16-bit 16kHz PCM chunks with voice activity detection (VAD)',
      'Sub-system modularity allowing on-the-fly target language switching via lightweight JSON control frames',
      'Robust async database logging with automatic graceful degradation on persistent storage failure'
    ]
  },
  {
    title: 'ToxiGuard AI — Real-Time Toxicity Detection Platform',
    description: 'Engineered a hybrid NLP moderation system for real-time detection of abusive and toxic language with sentiment analysis, severity scoring, and keyword highlighting. Combines ML models with LLM fallback for contextual moderation and includes an analytics dashboard with KPIs, charts, word clouds, history tracking, and CSV export.',
    techStack: ['Python', 'FastAPI', 'React', 'NLP', 'Sentiment Analysis', 'Machine Learning', 'LLM', 'Plotly'],
    liveUrl: 'https://toxiai-agent.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/toxiguard-ai.git',
    featured: true,
    logo: '/toxiguard.png',
    timing: 'Jan – Aug 2026',
    architecture: 'Scikit-learn / Transformer Classifier + Gemini LLM Verification + FastAPI Async Engine',
    metrics: [
      { label: 'Inference Latency', value: '<45ms' },
      { label: 'Classification F1', value: '94.2%' },
      { label: 'Token Cost Cut', value: '78%' }
    ],
    highlights: [
      'Two-stage cascade classifier minimizing token costs by 78% via local ML pre-screening',
      'Automated semantic keyword extraction with dynamic multi-severity highlighting',
      'Executive analytics suite generating real-time audit logs and CSV compliance exports'
    ]
  },
  {
    title: 'Rigel AI — Intelligent Code Smell Detection System',
    description: 'Developed an AI-powered static code analysis platform to detect code smells using AST-based parsing, machine learning models, and LLM reasoning. Supports real-time follow-up queries for deeper code understanding and generates PDF reports with optimization suggestions. Improves software quality by identifying issues such as long methods, duplicate code, god classes, and poor naming practices.',
    techStack: ['Python', 'FastAPI', 'React (Vite)', 'LLM', 'AST', 'Machine Learning'],
    liveUrl: 'https://rigelai-agent.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/RigelAI.git',
    featured: true,
    timing: 'Jan – Apr 2026',
    architecture: 'Abstract Syntax Tree (AST) Extractor + Code Quality Neural Heuristics + Conversational LLM',
    metrics: [
      { label: 'Code Smells Detected', value: '14+ Anti-Patterns' },
      { label: 'Query Response', value: '<1.2s' },
      { label: 'Report Generation', value: 'Automated PDF' }
    ],
    highlights: [
      'Deterministic AST traversal pinpointing god classes, high cyclomatic complexity, and duplicate code blocks',
      'Interactive AI pairing assistant enabling line-by-line automated refactoring recommendations',
      'Exportable enterprise-grade code health audit reports'
    ]
  },
  {
    title: 'Nexus Finance Bank — Full Stack Banking Application',
    description: 'Architected a secure full-stack banking system supporting fund transfers, transaction history, and account management. Implemented JWT-based authentication, modular REST APIs, and containerized deployment using Docker Compose for reproducible environments and CI/CD readiness.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs', 'JWT'],
    liveUrl: 'https://nexus-finance-bank-frontend-ex4r.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/NexusFinanceBank1.git',
    featured: false,
    architecture: 'Spring Boot Microservices + MySQL Cluster + Docker Compose + JWT RBAC',
    metrics: [
      { label: 'Security Layer', value: 'JWT + BCrypt' },
      { label: 'API Endpoints', value: '25+ REST Routes' },
      { label: 'Containerization', value: 'Docker Compose' }
    ]
  },
  {
    title: 'Pathways — Online Job Application Tracker',
    description: 'Built a job application tracking system with role-based access control (Admin/User), secure authentication, and optimized REST APIs. Designed to manage job postings, application status, and workflow tracking for multiple users with improved response performance.',
    techStack: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
    liveUrl: 'https://pathways-jobsearchengine.vercel.app/',
    githubUrl: 'https://github.com/wraith-klu/Pathway.git',
    featured: false,
    architecture: 'Role-Based Spring Boot API + Relational Normalization + Responsive Client',
    metrics: [
      { label: 'Role Access', value: 'Admin / Applicant' },
      { label: 'Query Latency', value: '<30ms' }
    ]
  },
  {
    title: 'Strive Rides — Ride Booking Application (Hackathon Project)',
    description: 'Developed a ride-booking platform featuring real-time tracking, booking workflows, and backend services for ride management. Built during Code4Change Hackathon as a scalable transportation solution.',
    techStack: ['React.js', 'Spring Boot', 'MySQL'],
    featured: false,
    architecture: 'Event-driven Booking State Machine + Spatial Coordinate Calculations',
    metrics: [
      { label: 'Hackathon Award', value: 'Finalist' },
      { label: 'Build Sprint', value: '36 Hours' }
    ]
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
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
    issuer: 'Microsoft',
    year: '2026',
    url: 'https://learn.microsoft.com/api/credentials/share/en-us/SaurabhYadav-6589/A97FA4AD5D7BCB5A?sharingId=65D6EB0DA668C3A'
  },
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
  // Languages & Core Fundamentals
  { name: 'Python', level: 96, category: 'languages' },
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'Data Structures and Algorithms', level: 94, category: 'languages' },
  { name: 'System Design Basics', level: 88, category: 'languages' },
  { name: 'SQL', level: 88, category: 'languages' },
  { name: 'JavaScript', level: 82, category: 'languages' },

  // Frameworks & High-Concurrency Systems
  { name: 'FastAPI', level: 95, category: 'frameworks' },
  { name: 'Spring Boot', level: 88, category: 'frameworks' },
  { name: 'Docker & Containers', level: 90, category: 'frameworks' },
  { name: 'REST APIs', level: 94, category: 'frameworks' },
  { name: 'JWT Authentication', level: 90, category: 'frameworks' },
  { name: 'React.js', level: 84, category: 'frameworks' },
  { name: 'Next.js', level: 80, category: 'frameworks' },

  // Generative AI & Machine Learning Infrastructure
  { name: 'PyTorch', level: 90, category: 'ai' },
  { name: 'scikit-learn', level: 92, category: 'ai' },
  { name: 'RAG Systems', level: 94, category: 'ai' },
  { name: 'LLMs (GPT, LLaMA)', level: 92, category: 'ai' },
  { name: 'TensorRT / ONNX', level: 86, category: 'ai' },
  { name: 'Agentic AI', level: 88, category: 'ai' },
  { name: 'Natural Language Processing', level: 94, category: 'ai' },
  { name: 'LangChain', level: 90, category: 'ai' },
  { name: 'ML Pipelines', level: 92, category: 'ai' },
  { name: 'Fine-tuning & LoRA', level: 86, category: 'ai' },
  { name: 'Feature Engineering', level: 90, category: 'ai' },
  { name: 'MLOps / Model Monitoring', level: 85, category: 'ai' },

  // Databases & Cloud Infrastructure
  { name: 'PostgreSQL', level: 90, category: 'tools' },
  { name: 'Redis', level: 88, category: 'tools' },
  { name: 'AWS', level: 88, category: 'tools' },
  { name: 'Linux & Bash', level: 90, category: 'tools' },
  { name: 'Git / GitHub', level: 92, category: 'tools' },
  { name: 'Vector DBs (Qdrant/Pinecone)', level: 86, category: 'tools' },
  { name: 'MySQL', level: 85, category: 'tools' },
  { name: 'Streamlit', level: 86, category: 'tools' }
];



export const achievements: Achievement[] = [
  {
    title: 'Top 1% Academic Rank (9.61 GPA)',
    organization: 'Koneru Lakshmaiah University',
    year: '2024–Present',
    description: 'Ranked in the top 1% across the Computer Science Department with a 9.61/10 cumulative GPA, demonstrating uncompromising mastery of systems, algorithms, and applied machine learning.'
  },
  {
    title: 'Finalist & Technical Lead — Code4Change Hackathon',
    organization: 'KL University — The Startup Society',
    year: '2025',
    description: 'Spearheaded full-stack engineering for Strive Rides under a 36-hour sprint; delivered resilient geospatial dispatch and real-time state machine workflows across 100+ competing teams.'
  },
  {
    title: '500+ Algorithmic Challenges Solved',
    organization: 'LeetCode, Codeforces, CodeChef',
    year: 'Ongoing',
    description: 'Demonstrated deep algorithmic proficiency across graphs, dynamic programming, backtracking, and optimization problem sets under strict time & space constraints.'
  },
  {
    title: 'AWS Certified AI-ML Specialization Honors',
    organization: 'EduSkills — AWS Academy',
    year: '2025',
    description: 'Ranked top of cohort across 10 weeks of cloud-native ML engineering; architected scalable model training on Amazon SageMaker with production automated evaluation.'
  },
  {
    title: 'District Representative Athlete (U-19 Cricket)',
    organization: 'Lucknow District Cricket Association',
    year: '2022–2024',
    description: 'Represented district team under high-pressure tournament conditions; honed extreme discipline, real-time tactical agility, and decisive team leadership.'
  },
  {
    title: 'Global Competitive Programming Contender',
    organization: 'Codeforces & LeetCode Global Contests',
    year: 'Ongoing',
    description: 'Consistently ranks in top percentiles in rated weekend contests, analyzing edge-case performance and reducing computational complexity.'
  }
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
