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
    { icon: 'MongoDB', skillType: [SkillType.Database] },
    { icon: 'Git', skillType: [SkillType.Tools] },
    { icon: 'Redux', skillType: [SkillType.Libraries, SkillType.Web] },
    { icon: 'jQuery', skillType: [SkillType.Libraries, SkillType.Web] },
    { icon: 'Tailwind', skillType: [SkillType.Frameworks, SkillType.Web] },
    { icon: 'Kubernetes', skillType: [SkillType.Tools] },
    { icon: 'Docker', skillType: [SkillType.Tools] },
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
        title: 'Software Engineer II',
        subtitle:
            '<a href="https://apexfintechsolutions.com" target="_blank" class="funderline">Apex Fintech Solutions</a> | July 2024 - Present',
        bulletPoints: [
            'Bringing Apex&apos;s legacy securities lending platform to the cloud',
            'Developed microservices in Golang to establish connectivity with the New York Stock Exchange, enhancing real-time data acess and integration',
            'Engineered a new frontend platform enabling traders to efficiently locate stock, book contracts, and monitor open contracts, ultimately streamlining trading operations and user experience',
            'Constructed a robust backend-for-frontend (BFF) service, tailored to facilitate seamless communication bewteen the frontend interface and multiple underlying microservices',
        ],
        technologies: ['Golang', 'gRPC', 'React', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'Docker', 'CSharp', 'Git'],
        type: [ExpType.FullTime],
    },
    {
        title: 'Full-Stack Software Engineer',
        subtitle:
            '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | August 2022 - July 2024',
        bulletPoints: [
            'Spearheaded multiple projects for Epic&apos;s Dermatology Application, owning all aspects from design to development',
            'Developed full-stack solutions to help dermatologists document patients&apos; skin conditions',
            'Discovered, investigated, and fixed hundreds of bugs',
            'Supported the company-wide move from SVN to Git',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Dotnet', 'Git', 'Cache'],
        type: [ExpType.FullTime],
    },
    {
        title: 'Software Engineer',
        subtitle:
            '<a class="funderline" href="https://www.linkedin.com/company/yoketeam/" target="_blank">YOKE</a> | Aug 2021 - Dec 2021',
        bulletPoints: ['Built features to enhance the way student atheletes maximize their name, image, and likeness'],
        technologies: ['React', 'TypeScript', 'Git'],
        type: [ExpType.FullTime, ExpType.StartUp],
    },
    {
        title: 'Technology Project Management Intern',
        subtitle:
            '<a class="funderline" href="https://www.simongroupholdings.com/" target="_blank">Simon Group Holdings</a> | May 2019 - Feb 2020',
        bulletPoints: [
            'Completed an implementation of Salesforce CRM for several SGH companies in under two months, including historical data migration from each company&apos;s legacy CRM, data security between each company, and feature enhancements for each company',
            'Identified <a class="funderline" href="https://fluidautomationstation.com/" target="_blank">Fuel Automation Station&apos;</a> (FAS) strategic customers by analyzing trends in crude oil price in relation to customers&apos; revenue and utilization of fracking units, shifting the sales team&apos;s focus to the most strategic and profitable customers',
            '<a class="funderline" href="https://photos.app.goo.gl/osEqMRQajRicLNS5A" target="_blank">Exhibited in Abu Dhabi International Petroleum Exhibition & Conference</a> (ADIPEC 2019) and showcased FAS&apos; software capabilities to thousands of attendees, resulting in a deal with <a class="funderline" href="https://saudidrill.com" target="_blank">Saudi Drill Company</a>',
            'Created an online inventory management system for FAS&apos; warehouses around the U.S.',
            'Designed UI/UX for dashboard reports in FAS&apos; cloud software',
            '<a class="funderline" href="https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA" target="_blank">Flown out to FAS&apos; Command Center and Operating Frac Sites</a> in the Houston (TX) area to research the needs of operators and identify places for improvements for the Cloud Software (August 2019)',
        ],
        technologies: ['Salesforce'],
        type: [ExpType.Internship],
    },
    {
        title: 'Product Management Intern',
        subtitle:
            '<a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> | Summer 2020',
        bulletPoints: [
            'Automated uploading customers&apos; aircraft inventory into the APN Database, decreasing the upload time by 5 hours',
            'Defined APN&apos;s 2020/2021 Product Development Roadmap (Scope of Work for development team, categorization of modules & sub-modules, calculation of time-costs, and determination of priority)',
            'Configured APN&apos;s Pipedrive CRM with automation, dashboard reports, and feature enhancements',
        ],
        technologies: ['React', 'JavaScript', 'Express', 'HTML', 'CSS', 'Git'],
        type: [ExpType.Internship],
    },
    {
        title: 'Jr. Software Engineer',
        subtitle:
            '<a class="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a> | Summer 2020',
        bulletPoints: [
            'Built an eCommerce web app equipped with user authentication, product listings, Stripe-payment integration, an admin console, and customizable email notifications',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'Express', 'Git'],
        type: [ExpType.Internship, ExpType.StartUp],
    },
];

type Prjs = ICardProps & { type: PrjType[] };

export const projects: Prjs[] = [
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
