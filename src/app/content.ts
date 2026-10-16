import { ExpType, IButtonProps, ICardProps, PrjType, SkillType } from './types';

export const links: Array<IButtonProps> = [
    { link: 'mailto:jaeyoungchang5@gmail.com', icon: 'Mail' },
    { link: 'https://github.com/jaeyoungchang5', icon: 'GitHub', target: '_blank' },
    { link: 'https://www.linkedin.com/in/jaeyoungchang/', icon: 'LinkedIn', target: '_blank' },
    { link: '/files/resume.pdf', icon: 'Resume', target: '_blank' },
];

type Skills = IButtonProps & { skillType: SkillType[] };

export const skills: Array<Skills> = [
    { icon: 'Golang', skillType: [SkillType.Languages] },
    { icon: 'gRPC', skillType: [SkillType.Frameworks] },
    { icon: 'TypeScript', skillType: [SkillType.Languages, SkillType.Web, SkillType.Mobile] },
    { icon: 'JavaScript', skillType: [SkillType.Languages, SkillType.Web, SkillType.Mobile] },
    { icon: 'CSharp', skillType: [SkillType.Languages, SkillType.Web] },
    { icon: 'Python', skillType: [SkillType.Languages] },
    { icon: 'CPlusPlus', skillType: [SkillType.Languages] },
    { icon: 'Java', skillType: [SkillType.Languages] },
    { icon: 'React', skillType: [SkillType.Libraries, SkillType.Web] },
    { icon: 'ReactNative', skillType: [SkillType.Frameworks, SkillType.Mobile] },
    { icon: 'Next', skillType: [SkillType.Frameworks, SkillType.Web] },
    { icon: 'Dotnet', skillType: [SkillType.Frameworks, SkillType.Web] },
    { icon: 'Node', skillType: [SkillType.Web] },
    { icon: 'Express', skillType: [SkillType.Frameworks, SkillType.Web] },
    { icon: 'SQL', skillType: [SkillType.Languages, SkillType.Database] },
    { icon: 'PostgreSQL', skillType: [SkillType.Languages, SkillType.Database] },
    { icon: 'Redis', skillType: [SkillType.Database] },
    { icon: 'MongoDB', skillType: [SkillType.Database] },
    { icon: 'Git', skillType: [SkillType.Tools] },
    { icon: 'Redux', skillType: [SkillType.Libraries, SkillType.Web] },
    { icon: 'jQuery', skillType: [SkillType.Libraries, SkillType.Web] },
    { icon: 'Tailwind', skillType: [SkillType.Frameworks, SkillType.Web] },
    { icon: 'Kubernetes', skillType: [SkillType.Tools] },
    { icon: 'Docker', skillType: [SkillType.Tools] },
    { icon: 'GoogleCloud', skillType: [SkillType.Tools] },
    { icon: 'CloudRun', skillType: [SkillType.Tools] },
    { icon: 'Kafka', skillType: [SkillType.Tools] },
    { icon: 'PubSub', skillType: [SkillType.Tools] },
    { icon: 'VertexAI', skillType: [SkillType.Tools] },
    { icon: 'SVN', skillType: [SkillType.Tools] },
    { icon: 'Yarn', skillType: [SkillType.Tools] },
    { icon: 'Agile', skillType: [SkillType.Tools] },
    { icon: 'MUMPS', skillType: [SkillType.Languages] },
    { icon: 'Expo', skillType: [SkillType.Frameworks, SkillType.Mobile, SkillType.Tools] },
    { icon: 'Firebase', skillType: [SkillType.Tools] },
    { icon: 'Heroku', skillType: [SkillType.Tools] },
    { icon: 'Netlify', skillType: [SkillType.Tools] },
    { icon: 'Vercel', skillType: [SkillType.Tools] },
    { icon: 'Postman', skillType: [SkillType.Tools] },
    { icon: 'Markdown', skillType: [SkillType.Languages] },
    { icon: 'Bash', skillType: [SkillType.Languages, SkillType.Tools] },
    { icon: 'Swift', skillType: [SkillType.Languages, SkillType.Mobile] },
    { icon: 'Kotlin', skillType: [SkillType.Languages, SkillType.Mobile] },
    { icon: 'Cache', skillType: [SkillType.Languages] },
    { icon: 'Arduino', skillType: [SkillType.Languages] },
    { icon: 'HTML', skillType: [SkillType.Languages, SkillType.Web] },
    { icon: 'CSS', skillType: [SkillType.Languages, SkillType.Web] },
    { icon: 'Sass', skillType: [SkillType.Languages, SkillType.Web] },
    { icon: 'Puppeteer', skillType: [SkillType.Frameworks] },
    { icon: 'Salesforce', skillType: [SkillType.Tools] },
    { icon: 'Soccer', skillType: [SkillType.Hobbies] },
    { icon: 'Tennis', skillType: [SkillType.Hobbies] },
    { icon: 'Golf', skillType: [SkillType.Hobbies] },
    { icon: 'Pickleball', skillType: [SkillType.Hobbies] },
    { icon: 'Gaelic', skillType: [SkillType.Hobbies] },
    { icon: 'Hurling', skillType: [SkillType.Hobbies] },
    { icon: 'Woodworking', skillType: [SkillType.Hobbies] },
    { icon: 'Fishing', skillType: [SkillType.Hobbies] },
    { icon: 'Guitar', skillType: [SkillType.Hobbies] },
    { icon: 'Piano', skillType: [SkillType.Hobbies] },
    { icon: 'Saxophone', skillType: [SkillType.Hobbies] },
];

type Exps = ICardProps & { type: ExpType[] };

export const experiences: Exps[] = [
    {
        title: 'Apex Fintech Solutions',
        bulletPoints: [],
        roles: [
            {
                title: 'Senior Software Engineer & Team Lead',
                subtitle:
                    '<a href="https://apexfintechsolutions.com" target="_blank" class="funderline">Apex Fintech Solutions</a> | July 2026 - Present',
                bulletPoints: [
                    'Lead a team of three engineers as a player-coach: I write and review code daily and own the team&apos;s technical decisions',
                    'Delivered the engineering work that brought Fisher Investments and State Street live on Apex&apos;s wealth management platform',
                    'One of the first team leads (Squad Captains) in Apex&apos;s squad model, where small cross-functional squads own initiatives from build through release and production support',
                    'Partner with Product and Technical Solutions Architects to validate specs before build: pressure-testing requirements against how the systems actually work, flagging gaps and edge cases early, and agreeing on design tradeoffs so my team can make implementation calls on its own within that architecture',
                    'Participate in the company-wide production on-call rotation',
                ],
            },
            {
                title: 'Software Engineer II, Securities Lending',
                subtitle:
                    '<a href="https://apexfintechsolutions.com" target="_blank" class="funderline">Apex Fintech Solutions</a> | July 2024 - June 2026',
                bulletPoints: [
                    'Built the core services behind Apex&apos;s Securities Lending program, a $100M+ revenue business, across product offerings for trading, contract management, inventory management, and revenue allocation',
                    'Led the migration of Apex Lend Plus and Stock Locates from on-prem to Google Cloud (GKE, Cloud Run, PostgreSQL, Redis, BigQuery), which now serve nearly all production traffic for managing contracts and inventory, surfacing insights, and acting on recommendations',
                    'Partnered directly with Apex&apos;s securities lending traders to identify friction in their daily workflows and delivered tailored solutions',
                    'Served on the RIA Trade Away Tiger Team, a client initiative that let traders execute trades away from Apex as their clearing platform, working across accounts, client configuration, and trade execution domains',
                    'Provided production support across both modern cloud-native and legacy on-premises systems',
                    'Built Claude agents and skills that every engineer on the team uses for code review, test generation, internal documentation, and cloud-migration work',
                    'Mentored junior engineers and led cross-domain initiatives across the engineering organization',
                ],
            },
        ],
        technologies: [
            'Golang',
            'gRPC',
            'React',
            'TypeScript',
            'CSharp',
            'SQL',
            'PostgreSQL',
            'Redis',
            'GoogleCloud',
            'Kubernetes',
            'CloudRun',
            'PubSub',
            'Docker',
            'Git',
        ],
        type: [ExpType.FullTime],
    },
    {
        title: 'Full-Stack Software Engineer',
        subtitle:
            '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | August 2022 - July 2024',
        bulletPoints: [
            'Owned the Skin Cancer History project for Epic&apos;s Dermatology application end to end: user research, design, full-stack development, and post-launch usability testing',
            'Shadowed and interviewed practicing dermatologists across the country to understand gaps in their documentation workflows',
            'Shipped full-stack clinical software to help dermatologists document patients&apos; skin conditions',
            'Discovered, investigated, and fixed hundreds of production bugs in live clinical systems',
            'Supported the company-wide move from SVN to Git',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Dotnet', 'Git', 'Cache'],
        type: [ExpType.FullTime],
    },
    {
        title: 'Co-Founder',
        subtitle: 'Wealth Kitchen Inc. | June 2023 - March 2024',
        bulletPoints: [
            'Co-founded a software company solving everyday problems for mid-sized RIA firms and their wealth managers',
            'Built a platform that brings advisors&apos; daily tools into one view and suggests next tasks, so nothing falls through the cracks and advisors can focus on the work that matters most',
        ],
        technologies: [],
        type: [ExpType.StartUp],
    },
    {
        title: 'Software Engineer',
        subtitle:
            '<a class="funderline" href="https://www.linkedin.com/company/yoketeam/" target="_blank">YOKE</a> | Aug 2021 - Dec 2021',
        bulletPoints: [
            'Built React/TypeScript features to enhance the way student athletes maximize their name, image, and likeness',
        ],
        technologies: ['React', 'TypeScript', 'Git'],
        type: [ExpType.FullTime, ExpType.StartUp],
    },
    {
        title: 'Undergraduate Teaching Assistant',
        subtitle:
            '<a class="funderline" href="https://www.nd.edu" target="_blank">University of Notre Dame</a> | Aug 2020 - Dec 2021',
        bulletPoints: [
            'Helped teach hundreds of students in Fundamentals of Computing (CSE 20311), Notre Dame&apos;s introductory computer science course',
        ],
        technologies: [],
        type: [ExpType.Internship],
    },
    {
        title: 'Software Development Intern',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | Summer 2021',
        bulletPoints: [
            'Prototyped a full-stack tool that shows patients a detailed preview of medical record data a third-party app is requesting, built to health care data exchange standards',
        ],
        technologies: [],
        type: [ExpType.Internship],
    },
    {
        title: 'Jr. Software Engineer',
        subtitle:
            '<a class="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a> | Summer 2020',
        bulletPoints: [
            'Built an eCommerce web app with user authentication, product listings, Stripe payments, an admin console, and customizable email notifications',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'Express', 'Git'],
        type: [ExpType.Internship, ExpType.StartUp],
    },
    {
        title: 'Product Management Intern',
        subtitle:
            '<a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> | Summer 2020',
        bulletPoints: [
            'Automated uploading customers&apos; aircraft inventory into the APN database, cutting upload time by 5 hours',
            'Defined APN&apos;s 2020/2021 product roadmap: scope of work, module breakdown, time-cost estimates, and priorities',
            'Configured APN&apos;s Pipedrive CRM with automation, dashboard reports, and feature enhancements',
        ],
        technologies: ['React', 'JavaScript', 'Express', 'HTML', 'CSS', 'Git'],
        type: [ExpType.Internship],
    },
    {
        title: 'Technology Project Management Intern',
        subtitle:
            '<a class="funderline" href="https://www.simongroupholdings.com/" target="_blank">Simon Group Holdings</a> | May 2019 - Feb 2020',
        bulletPoints: [
            'Implemented Salesforce CRM across several SGH companies in under two months, including legacy data migration, data separation between companies, and company-specific enhancements',
            '<a class="funderline" href="https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA" target="_blank">Visited</a> <a class="funderline" href="https://fluidautomationstation.com/" target="_blank">Fuel Automation Station&apos;s</a> (FAS) Command Center and frac sites near Houston to learn operators&apos; needs and find improvements for FAS&apos;s cloud software',
            'Identified FAS&apos;s most strategic customers by analyzing crude oil price trends against customer revenue and frac unit utilization, refocusing the sales team',
            '<a class="funderline" href="https://photos.app.goo.gl/osEqMRQajRicLNS5A" target="_blank">Exhibited at ADIPEC 2019</a> in Abu Dhabi, showcasing FAS&apos;s software to thousands of attendees and leading to a deal with <a class="funderline" href="https://saudidrill.com" target="_blank">Saudi Drill Company</a>',
            'Built an online inventory management system for FAS&apos;s U.S. warehouses and designed dashboard reports for its cloud software',
        ],
        technologies: ['Salesforce'],
        type: [ExpType.Internship],
    },
];

type Prjs = ICardProps & { type: PrjType[] };

export const projects: Prjs[] = [
    {
        title: 'Pixel Dash',
        subtitle: 'A Hardware + Cloud Smart Display (2026, in progress)',
        bulletPoints: [
            'Building a Tidbyt-inspired smart display: a 64x32 RGB LED matrix driven by an Adafruit MatrixPortal M4, paired with a custom cloud backend',
            'Built as a monorepo with two independently deployed pieces: firmware (C++/PlatformIO) flashed to the physical device, and a backend API (TypeScript/Express) running on Google Cloud Run',
            'Designed the device-to-cloud contract: the device polls one endpoint, and the API returns pre-simplified data for the user&apos;s widgets (weather, CTA transit arrivals, sports scores, and more) to fit the firmware&apos;s limited memory',
            'Maintain a shared widget-type contract kept in sync across the embedded firmware and the backend as new widgets are added',
        ],
        technologies: ['CPlusPlus', 'PlatformIO', 'TypeScript', 'Express', 'CloudRun', 'SQL'],
        type: [PrjType.FullStack],
    },
    {
        title: 'My Portfolio',
        subtitle: '',
        bulletPoints: ['Deployed my own personal website with Next.js, Tailwind CSS, and Vercel'],
        technologies: ['Next', 'React', 'TypeScript', 'Vercel', 'Tailwind'],
        type: [PrjType.Web],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/portfolio',
        },
    },
    {
        title: 'Swipe & Swing',
        subtitle: 'A Golf Matching Mobile App',
        bulletPoints: [
            'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
            'Earned 1st place award in class for best application',
            'Developed features to allow users to swipe and match with profiles (think Tinder), message golfers they matched with, and use a map API to find golf courses and book tee times',
            'Designed the backend framework to store and return data from a SQL database',
        ],
        technologies: ['ReactNative', 'TypeScript', 'Python', 'SQL'],
        type: [PrjType.FullStack, PrjType.Mobile],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/swipe-and-swing',
        },
    },
    {
        title: 'Campus Wayzz',
        subtitle: 'A Location Discovery Mobile App',
        bulletPoints: [
            'Deployed a location discovery mobile application that enable users to find spaces on campus with their friends',
            'Owned the development of the entire backend server, mobile app middleware, and the MongoDB database',
            'Developed a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API',
            'Earned one of three perfect project grades in class',
        ],
        technologies: ['ReactNative', 'TypeScript', 'Express', 'MongoDB'],
        type: [PrjType.FullStack, PrjType.Mobile],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/campuswayzz',
        },
    },
    {
        title: 'Notre Dame Menu Text App',
        subtitle: '',
        bulletPoints: [
            'Created an automated menu texting app using a MERN stack (MongoDB, Express, React, Node)',
            'Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (Sunday - Saturday). For each day, the user will choose the meal (Breakfast, Lunch, Dinner), the dining hall (North Dining Hall or South Dining Hall), and the notification time.',
            'Admin can post, delete, and edit menus for a dining hall&apos;s meal on any given date.',
        ],
        technologies: ['React', 'JavaScript', 'Express', 'MongoDB'],
        type: [PrjType.FullStack, PrjType.Web],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/menu-text-app',
        },
    },
    {
        title: 'Inventory Upload Assistance App',
        subtitle: '',
        bulletPoints: [
            'Developed a web app for <a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> to help customers upload aircraft inventory items into the AeroParts Now database',
            'This app imports a CSV file of inventory items, merges parts&apos; <em>Quantities</em> if their <em>Part Number</em>, <em>Serial Number</em>, <em>Condition Code</em>, and <em>Warehouse Location</em> are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)',
            'Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items',
        ],
        technologies: ['React', 'JavaScript', 'Express', 'HTML', 'CSS'],
        type: [PrjType.FullStack, PrjType.Web],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/inventory-app',
        },
    },
    {
        title: 'Instagram Insights',
        subtitle: '',
        bulletPoints: [
            'Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you',
            'Used the Puppeteer headless browser to scrape data because Instagram doesn&apos;t have a public API that can be used to gather a list of followers, following, unfollowed, and not following back',
        ],
        technologies: ['JavaScript', 'Express', 'Puppeteer', 'HTML', 'CSS'],
        type: [PrjType.FullStack, PrjType.Web],
        link: {
            text: 'View repo',
            link: 'https://github.com/jaeyoungchang5/instagram-project',
        },
    },
];

export const educations: ICardProps[] = [
    {
        title: 'University of Notre Dame',
        subtitle: '2018 - 2022 | GPA: 3.705',
        bulletPoints: [
            'Graduated with a BS in Computer Science from the College of Engineering',
            'Earned a Minor in Engineering Corporate Practice',
            'Relevant Courses: Data Structures, Algorithms, Operating Systems, Systems Programming, Advanced Databases, Computer Architecture, Logic Design, Theory of Computing, Programming Paradigms, Secure Software Engineering, Data Science, Droid Building, Discrete Mathematics',
        ],
        technologies: [],
    },
];
