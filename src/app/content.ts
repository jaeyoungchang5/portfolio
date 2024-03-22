import { ExpType, IButtonProps, ICardProps, PrjType, SkillType } from "./types";

export const links: Array<IButtonProps> = [
    { link: "mailto:jaeyoungchang5@gmail.com", icon: 'Mail' },
    { link: 'https://github.com/jaeyoungchang5', icon: 'GitHub', target: '_blank' },
    { link: 'https://www.linkedin.com/in/jaeyoungchang5/', icon: 'LinkedIn', target: '_blank' },
    { text: 'Resume', link: '/files/resume.pdf', icon: 'Download', target: '_blank' }
];

type Skills = IButtonProps & { skillType: SkillType[] }

export const skills: Array<Skills> = [
    { icon: 'TypeScript', skillType: [ SkillType.Languages, SkillType.Web, SkillType.Mobile ] },
    { icon: 'JavaScript', skillType: [ SkillType.Languages, SkillType.Web, SkillType.Mobile] },
    { icon: 'CSharp', skillType: [ SkillType.Languages, SkillType.Web ] },
    { icon: 'Python', skillType: [ SkillType.Languages] },
    { icon: 'CPlusPlus', skillType: [ SkillType.Languages] },
    { icon: 'Java', skillType: [ SkillType.Languages] },
    { icon: 'React', skillType: [ SkillType.Libraries, SkillType.Web ] },
    { icon: 'ReactNative', skillType: [ SkillType.Frameworks, SkillType.Mobile ] },
    { icon: 'Next', skillType: [ SkillType.Frameworks, SkillType.Web ] },
    { icon: 'Dotnet', skillType: [ SkillType.Frameworks, SkillType.Web ] },
    { icon: 'Node', skillType: [ SkillType.Web ] },
    { icon: 'Express', skillType: [ SkillType.Frameworks, SkillType.Web ] },
    { icon: 'SQL', skillType: [ SkillType.Languages, SkillType.Database ] },
    { icon: 'MongoDB', skillType: [ SkillType.Database] },
    { icon: 'Git', skillType: [ SkillType.Tools ] },
    { icon: 'Redux', skillType: [ SkillType.Libraries, SkillType.Web ] },
    { icon: 'jQuery', skillType: [ SkillType.Libraries, SkillType.Web ] },
    { icon: 'Tailwind', skillType: [ SkillType.Frameworks, SkillType.Web ] },
    { icon: 'Expo', skillType: [ SkillType.Frameworks, SkillType.Mobile, SkillType.Tools ] },
    { icon: 'Firebase', skillType: [ SkillType.Tools ] },
    { icon: 'Heroku', skillType: [ SkillType.Tools ] },
    { icon: 'Netlify', skillType: [ SkillType.Tools ] },
    { icon: 'Vercel', skillType: [ SkillType.Tools ] },
    { icon: 'Postman', skillType: [ SkillType.Tools ] },
    { icon: 'Markdown', skillType: [ SkillType.Languages ] },
    { icon: 'Bash', skillType: [ SkillType.Languages, SkillType.Tools ] },
    { icon: 'Swift', skillType: [ SkillType.Languages, SkillType.Mobile ] },
    { icon: 'Kotlin', skillType: [ SkillType.Languages, SkillType.Mobile ] },
    { icon: 'Cache', skillType: [ SkillType.Languages ] },
    { icon: 'Arduino', skillType: [ SkillType.Languages] },
    { icon: 'HTML', skillType: [ SkillType.Languages, SkillType.Web ] },
    { icon: 'CSS', skillType: [ SkillType.Languages, SkillType.Web ] },
    { icon: 'Sass', skillType: [ SkillType.Languages, SkillType.Web ] },
    { icon: 'Puppeteer', skillType: [ SkillType.Frameworks ] },
    { icon: 'Salesforce', skillType: [ SkillType.Tools ] },
    { icon: 'Soccer', skillType: [ SkillType.Hobbies ] },
    { icon: 'Tennis', skillType: [ SkillType.Hobbies ] },
    { icon: 'Golf', skillType: [ SkillType.Hobbies ] },
    { icon: 'Pickleball', skillType: [ SkillType.Hobbies ] },
    { icon: 'Gaelic Football', skillType: [ SkillType.Hobbies ] },
    { icon: 'Hurling', skillType: [ SkillType.Hobbies ] },
    { icon: 'Woodworking', skillType: [ SkillType.Hobbies ] },
    { icon: 'Guitar', skillType: [ SkillType.Hobbies ] },
    { icon: 'Piano', skillType: [ SkillType.Hobbies ] },
    { icon: 'Saxophone', skillType: [ SkillType.Hobbies ] },
];

type Exps = ICardProps & { type: ExpType[] }

export const experiences: Exps[] = [
    {
        title: 'Full-Stack Software Engineer',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | August 2022 - Present',
        bulletPoints: [
            'Spearheaded multiple projects for Epic&apos;s Dermatology Application, overseeing all aspects from design and end-user interviews to full-stack development and post-implementation usability testing',
            'Developed full-stack solutions to help dermatologists document patients&apos; skin conditions',
            'Discovered, investigated, and fixed hundreds of bugs',
            'Helped facilitate the company-wide move from SVN to Git',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Dotnet', 'Git', 'Cache'],
        type: [ ExpType.FullTime ]
    },
    {
        title: 'Software Engineer Intern',
        subtitle: '<a class="funderline" href="https://www.linkedin.com/company/yoketeam/" target="_blank">YOKE</a> | Aug 2021 - Dec 2021',
        bulletPoints: [
            'Built features to enhance the way student atheletes maximize their name, image, and likeness',
        ],
        technologies: [ 'React', 'TypeScript' ],
        type: [ ExpType.Internship, ExpType.StartUp ]
    },
    {
        title: 'Undergraduate Teaching Assistant',
        subtitle: '<a class="funderline" href="https://cse.nd.edu" target="_blank">University of Notre Dame</a> | Aug 2020 - Dec 2021',
        bulletPoints: [
            'Teaching Assistant for Fundamentals of Computing (CSE 20311)',
            'Helped teach hundreds of computer science students in this introduction to computer science'
        ],
        technologies: [ 'CPlusPlus' ],
        type: [ ]
    },
    {
        title: 'Software Engineer Intern',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | Summer 2021',
        bulletPoints: [
            'Prototyped a full-stack solution that shows patients a detailed preview of medical record information requested by 3rd party apps, while adhering to health care data exchange standards',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Dotnet' , 'Git'],
        type: [ ExpType.Internship ]
    },
    {
        title: 'Jr. Software Engineer',
        subtitle: '<a class="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a> | Summer 2020',
        bulletPoints: [
            'Built an eCommerce web app equipped with user authentication, product listings, Stripe-payment integration, an admin console, and customizable email notifications',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'Express'],
        type: [ ExpType.Internship, ExpType.StartUp ]
    },
    {
        title: 'Product Management Intern',
        subtitle: '<a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> | Summer 2020',
        bulletPoints: [
            'Automated uploading customers&apos; aircraft inventory into the APN Database, decreasing the upload time by 5 hours',
            'Defined APN&apos;s 2020/2021 Product Development Roadmap (Scope of Work for development team, categorization of modules & sub-modules, calculation of time-costs, and determination of priority)',
            'Configured APN&apos;s Pipedrive CRM with automation, dashboard reports, and feature enhancements',
        ],
        technologies: ['React', 'JavaScript' , 'Express', 'HTML', 'CSS'],
        type: [ ExpType.Internship ]
    },
    {
        title: 'Technology Project Management Intern',
        subtitle: '<a class="funderline" href="https://www.simongroupholdings.com/" target="_blank">Simon Group Holdings</a> | May 2019 - Feb 2020',
        bulletPoints: [
            'Completed an implementation of Salesforce CRM for several SGH companies in under two months, including historical data migration from each company&apos;s legacy CRM, data security between each company, and feature enhancements for each company',
            'Designed UI/UX for dashboard reports in Fuel Automation Station&apos;s (FAS) cloud software',
            'Identified FAS&apos;s strategic customers by analyzing trends in crude oil price in relation to customers&apos; revenue and utilization of fracking units, shifting the sales team&apos;s focus to the most strategic and profitable customers',
            'Created an online inventory management system for FAS&apos;s warehouses around the U.S.',
            '<a class="funderline" href="https://photos.app.goo.gl/osEqMRQajRicLNS5A" target="_blank">Exhibited in ADIPEC</a> (<a class="funderline" href="https://www.adipec.com/" target="_blank">Abu Dhabi International Petroleum Exhibition & Conference</a>) and showcased FAS&apos;s software capabilities to thousands of attendees, resulting in a deal with Saudi Drill Company (November 2019)',
            '<a class="funderline" href="https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA" target="_blank">Flown out to FAS&apos;s Command Center and Operating Frac Sites</a> in the Houston (TX) area to research the needs of operators and identify places for improvements for the Cloud Software (August 2019)',
        ],
        technologies: ['Salesforce'],
        type: [ ExpType.Internship ]
    }
];

type Prjs = ICardProps & { type: PrjType[] }

export const projects: Prjs[] = [
	{
		title: 'My Portfolio',
		subtitle: '',
		bulletPoints: [
			'Deployed my own personal website created from scratch with Next.js, Tailwind CSS, and Vercel',
		],
		technologies: ['Next', 'React', 'TypeScript', 'Vercel', 'Tailwind'],
        type: [ PrjType.Web ]
	},
	{
		title: 'Swipe & Swing',
		subtitle: 'A Golf Matching Mobile App',
		bulletPoints: [
			'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
			'Developed features to allow users to swipe and match with profiles, message golfers they matched with, and use a map API to find golf courses and book tee times',
			'Designed the backend framework to store and return data from a SQL database',
		],
		technologies: ['ReactNative', 'TypeScript', 'Python', 'SQL'],
        type: [ PrjType.FullStack, PrjType.Mobile ]
	},
	{
		title: 'Campus Wayzz',
		subtitle: 'A Location Discovery Mobile App',
		bulletPoints: [
			'Deployed a location discovery mobile application that enable users to find spaces on campus with their friends',
			'Led the development of the entire backend server with APIs, React middleware for the app, and the MongoDB database for all the mobile application&apos;s needs',
			'Implemented a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API',
		],
		technologies: ['ReactNative', 'TypeScript', 'Express', 'MongoDB'],
        type: [ PrjType.FullStack, PrjType.Mobile ]
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
        type: [ PrjType.FullStack, PrjType.Web ]
	},
	{
		title: 'Inventory Upload Assistance App',
		subtitle: '',
		bulletPoints: [
			'Developed a web app for <a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> to help customers upload aircraft inventory items into the AeroParts Now database',
			'This app imports a CSV file of inventory items, merges parts&apos; <em>Quantities</em> if their <em>Part Number</em>, <em>Serial Number</em>, <em>Condition Code</em>, and <em>Warehouse Location</em> are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)',
			'Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items',
		],
		technologies: ['React', 'JavaScript' , 'Express', 'HTML', 'CSS'],
        type: [ PrjType.FullStack, PrjType.Web ]
	},
	{
		title: 'Instagram Insights',
		subtitle: '',
		bulletPoints: [
			'Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you',
			'Instagram doesn&apos;t have a public API that can be used to gather a list of followers, following, unfollowed, and not following back',
		],
		technologies: ['JavaScript', 'Express', 'Puppeteer', 'HTML', 'CSS'],
        type: [ PrjType.FullStack, PrjType.Web ]
	}
];