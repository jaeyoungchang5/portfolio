export type TechCategory = 'language' | 'framework' | 'library' | 'web' | 'mobile' | 'database' | 'tool';

type TechDef = {
    label: string;
    /** File in /public/icons. */
    icon?: string;
    categories: TechCategory[];
    /** Set false for tech that should only appear on experience/project cards. */
    inSkills?: boolean;
};

/**
 * Single registry for every technology on the site. Object order is the display order in Skills.
 * Experience and project `tech` arrays are typed against these keys, so a typo is a compile error.
 */
export const tech = {
    Golang: { label: 'Go', icon: 'go-8.svg', categories: ['language'] },
    gRPC: { label: 'gRPC', icon: 'grpc.svg', categories: ['framework'] },
    TypeScript: { label: 'TypeScript', icon: 'typescript-icon.svg', categories: ['language', 'web', 'mobile'] },
    JavaScript: { label: 'JavaScript', icon: 'javascript.svg', categories: ['language', 'web', 'mobile'] },
    CSharp: { label: 'C#', icon: 'c-sharp.svg', categories: ['language', 'web'] },
    Python: { label: 'Python', icon: 'python.svg', categories: ['language'] },
    CPlusPlus: { label: 'C/C++', icon: 'c-plusplus.svg', categories: ['language'] },
    Java: { label: 'Java', icon: 'java.svg', categories: ['language'] },
    React: { label: 'React', icon: 'react.svg', categories: ['library', 'web'] },
    ReactNative: { label: 'React Native', icon: 'react.svg', categories: ['framework', 'mobile'] },
    Next: { label: 'Next.js', icon: 'nextjs-icon.svg', categories: ['framework', 'web'] },
    Dotnet: { label: '.NET', icon: 'dotnet.svg', categories: ['framework', 'web'] },
    Node: { label: 'Node.js', icon: 'nodejs-icon.svg', categories: ['web'] },
    Express: { label: 'Express.js', icon: 'nodejs-icon.svg', categories: ['framework', 'web'] },
    SQL: { label: 'SQL', icon: 'mysql-icon.svg', categories: ['language', 'database'] },
    PostgreSQL: { label: 'PostgreSQL', icon: 'postgresql.svg', categories: ['language', 'database'] },
    Redis: { label: 'Redis', icon: 'redis.svg', categories: ['database'] },
    MongoDB: { label: 'MongoDB', icon: 'mongodb-icon.svg', categories: ['database'] },
    Git: { label: 'Git', icon: 'git-icon.svg', categories: ['tool'] },
    Redux: { label: 'Redux', icon: 'redux.svg', categories: ['library', 'web'] },
    jQuery: { label: 'jQuery', icon: 'jquery.svg', categories: ['library', 'web'] },
    Tailwind: { label: 'Tailwind CSS', icon: 'tailwindcss-icon.svg', categories: ['framework', 'web'] },
    Kubernetes: { label: 'Kubernetes', icon: 'kubernetes.svg', categories: ['tool'] },
    Docker: { label: 'Docker', icon: 'docker.svg', categories: ['tool'] },
    GoogleCloud: { label: 'Google Cloud', icon: 'google-cloud.svg', categories: ['tool'] },
    CloudRun: { label: 'Cloud Run', icon: 'google-cloud.svg', categories: ['tool'] },
    Kafka: { label: 'Kafka', icon: 'apache-kafka.svg', categories: ['tool'] },
    PubSub: { label: 'Pub/Sub', icon: 'google-pubsub.svg', categories: ['tool'] },
    VertexAI: { label: 'Vertex AI', icon: 'google-cloud.svg', categories: ['tool'] },
    SVN: { label: 'SVN', icon: 'subversion.svg', categories: ['tool'] },
    Yarn: { label: 'Yarn', icon: 'yarn.svg', categories: ['tool'] },
    Agile: { label: 'Agile', categories: ['tool'] },
    MUMPS: { label: 'MUMPS', categories: ['language'] },
    Expo: { label: 'Expo', icon: 'expo-icon.svg', categories: ['framework', 'mobile', 'tool'] },
    Firebase: { label: 'Firebase', icon: 'firebase.svg', categories: ['tool'] },
    Heroku: { label: 'Heroku', icon: 'heroku-icon.svg', categories: ['tool'] },
    Netlify: { label: 'Netlify', icon: 'netlify-icon.svg', categories: ['tool'] },
    Vercel: { label: 'Vercel', icon: 'vercel-icon.svg', categories: ['tool'] },
    Postman: { label: 'Postman', icon: 'postman-icon.svg', categories: ['tool'] },
    Markdown: { label: 'Markdown', icon: 'markdown.svg', categories: ['language'] },
    Bash: { label: 'Bash', icon: 'bash-icon.svg', categories: ['language', 'tool'] },
    Swift: { label: 'Swift', icon: 'swift.svg', categories: ['language', 'mobile'] },
    Kotlin: { label: 'Kotlin', icon: 'kotlin-icon.svg', categories: ['language', 'mobile'] },
    Cache: { label: 'Caché', icon: 'epic.svg', categories: ['language'] },
    Arduino: { label: 'Arduino', icon: 'arduino.svg', categories: ['language'] },
    HTML: { label: 'HTML', icon: 'html-5.svg', categories: ['language', 'web'] },
    CSS: { label: 'CSS', icon: 'css-3.svg', categories: ['language', 'web'] },
    Sass: { label: 'Sass', icon: 'sass.svg', categories: ['language', 'web'] },
    Puppeteer: { label: 'Puppeteer', icon: 'puppeteer.svg', categories: ['framework'] },
    Salesforce: { label: 'Salesforce', icon: 'salesforce.svg', categories: ['tool'] },
    PlatformIO: { label: 'PlatformIO', categories: ['tool'], inSkills: false },
} satisfies Record<string, TechDef>;

export type TechId = keyof typeof tech;

export const getTech = (id: TechId): TechDef => tech[id];

export const skillIds = (Object.keys(tech) as TechId[]).filter(id => getTech(id).inSkills !== false);

export const techLabels = (ids: TechId[]) => ids.map(id => tech[id].label);
