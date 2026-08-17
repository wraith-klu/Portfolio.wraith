/**
 * TechIcon — renders the official logo for a given technology name.
 * Sources:
 *   - Devicons CDN  (https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/…)
 *   - Simple Icons CDN (https://cdn.simpleicons.org/<slug>/<hex>)
 */

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const ICON_MAP: Record<string, string> = {
  // Programming Languages
  'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'SQL':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'HTML':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  // CS Fundamentals
  'Data Structures and Algorithms': 'https://cdn.simpleicons.org/leetcode/FFA116',
  'System Design Basics':           'https://cdn.simpleicons.org/diagramsdotnet/F08705',
  // Frameworks
  'FastAPI':           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Spring Boot':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'React.js':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js':           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'REST APIs':         'https://cdn.simpleicons.org/postman/FF6C37',
  'JWT Authentication':'https://cdn.simpleicons.org/jsonwebtokens/000000',
  'Docker':            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  // AI / ML
  'Prompt Engineering':        '/prompt-engineering.svg',
  'RAG Systems':               'https://cdn.simpleicons.org/langchain/1C3C3C',
  'LLMs (GPT, LLaMA)':        'https://cdn.simpleicons.org/meta/0082FB',
  'Natural Language Processing':'https://cdn.simpleicons.org/spacy/09A3D5',
  'scikit-learn':              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'ML Pipelines':              'https://cdn.simpleicons.org/apacheairflow/017CEE',
  'Model Tuning':              'https://cdn.simpleicons.org/huggingface/FFD21E',
  'Feature Engineering':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  'OpenAI API':                '/openai.svg',
  'LangChain':                 'https://cdn.simpleicons.org/langchain/1C3C3C',
  'Fine-tuning':               'https://cdn.simpleicons.org/huggingface/FFD21E',
  'Agentic AI':                'https://cdn.simpleicons.org/anthropic/191919',
  // Tools & DevOps
  'PostgreSQL':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Git / GitHub':'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Linux':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'AWS':         'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'Streamlit':   'https://cdn.simpleicons.org/streamlit/FF4B4B',
};

export const TechIcon = ({ name, size = 22, className = '' }: TechIconProps) => {
  const src = ICON_MAP[name];
  if (!src) {
    return (
      <span className={className} style={{ fontSize: size * 0.65, lineHeight: 1, display: 'block', textAlign: 'center' }}>
        {'</>'}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      draggable={false}
      loading="lazy"
      style={{ objectFit: 'contain' }}
    />
  );
};