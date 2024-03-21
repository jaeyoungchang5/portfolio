import { IButtonProps, ICardProps, SkillType } from "./types";

export const links: Array<IButtonProps> = [
    { link: "mailto:jaeyoungchang5@gmail.com", icon: 'Mail', iconInvert: true, },
    { link: 'https://github.com/jaeyoungchang5', icon: 'GitHub', target: '_blank' },
    { link: 'https://www.linkedin.com/in/jaeyoungchang5/', icon: 'LinkedIn', target: '_blank' },
    { text: 'Resume', link: '/files/resume.pdf', icon: 'Download', iconInvert: true, target: '_blank' }
];

type Skills = IButtonProps & { skillType: number[] }

export const skills: Array<Skills> = [
    { icon: 'TypeScript', skillType: [SkillType.Languages] },
    { icon: 'JavaScript', skillType: [SkillType.Languages] },
    { icon: 'CSharp', skillType: [SkillType.Languages] },
    { icon: 'Python', skillType: [SkillType.Languages] },
    { icon: 'CPlusPlus', skillType: [SkillType.Languages] },
    { icon: 'Java', skillType: [SkillType.Languages] },
    { icon: 'Bash', skillType: [SkillType.Languages] },
    { icon: 'MUMPS', skillType: [SkillType.Languages] },
    { icon: 'Arduino', skillType: [SkillType.Languages] },
    { icon: 'SQL', skillType: [SkillType.Languages] },
    { icon: 'Swift', skillType: [SkillType.Languages] },
    { icon: 'Kotlin', skillType: [SkillType.Languages] },
    { icon: 'React', skillType: [SkillType.Frameworks] },
    { icon: 'ReactNative', skillType: [SkillType.Frameworks] },
    { icon: 'Dotnet', skillType: [SkillType.Frameworks] },
    { icon: 'Express', skillType: [SkillType.Frameworks] },
    { icon: 'MongoDB', skillType: [SkillType.Frameworks] },
    { icon: 'jQuery', skillType: [SkillType.Frameworks] },
    { icon: 'Redux', skillType: [SkillType.Frameworks] },
    { icon: 'Cache', skillType: [SkillType.Frameworks] },
];

export const experiences: ICardProps[] = [
    {
        title: 'Co-Founder & CTO',
        subtitle: 'Wealth Kitchen, Inc. | June 2023 - Present',
        bulletPoints: [
            ''
        ],
        technologies: ['TypeScript', 'Express', 'Salesforce', 'Apex Programming']
    },
    {
        title: 'Full-Stack Software Engineer',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | August 2022 - Present',
        bulletPoints: [
            'Spearheaded multiple projects for Epic&apos;s Dermatology Application, overseeing all aspects from design and end-user interviews to full-stack development and post-implementation usability testing',
            'Developed full-stack solutions to help dermatologists document patients&apos; skin conditions',
            'Discovered, investigated, and fixed hundreds of bugs',
            'Helped facilitate the company-wide move from SVN to Git',
        ],
        technologies: ['TypeScript', 'CSharp', 'Dotnet', 'Git', 'MUMPS', 'Cache']
    },
    {
        title: 'Software Engineering Intern',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | Summer 2021',
        bulletPoints: [
            'Prototyped a full-stack solution that shows patients a detailed preview of medical record information requested by 3rd party apps, while adhering to health care data exchange standards',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Git']
    },
    {
        title: 'Jr. Software Engineer',
        subtitle: '<a class="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a> | Summer 2020',
        bulletPoints: [
            'Built an eCommerce web app equipped with user authentication, product listings, Stripe-payment integration, an admin console, and customizable email notifications (<a class="funderline" href="#idea-marketplace">Read More</a>)',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'Express']
    },
    {
        title: 'Product Management Intern',
        subtitle: '<a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> | Summer 2020',
        bulletPoints: [
            'Automated uploading customers&apos; aircraft inventory into the APN Database, decreasing the upload time by 5 hours (<a class="funderline" href="#inventory-app">Read More</a>)',
            'Defined APN&apos;s 2020/2021 Product Development Roadmap (Scope of Work for development team, categorization of modules & sub-modules, calculation of time-costs, and determination of priority)',
            'Configured APN&apos;s Pipedrive CRM with automation, dashboard reports, and feature enhancements',
        ],
        technologies: ['React']
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
        technologies: ['Salesforce']
    }
];

export const projects: ICardProps[] = [
	{
		title: 'Swipe & Swing',
		subtitle: 'A Golf Matching Mobile App',
		bulletPoints: [
			'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
			'Developed features to allow users to swipe and match with profiles, message golfers they matched with, and use a map API to find golf courses and book tee times',
			'Designed the backend framework to store and return data from a SQL database',
		],
		technologies: ['ReactNative', 'TypeScript', 'Python', 'SQL']
	},
	{
		title: 'Campus Wayzz',
		subtitle: 'A Location Discovery Mobile App',
		bulletPoints: [
			'Deployed a location discovery mobile application that enable users to find spaces on campus with their friends',
			'Led the development of the entire backend server with APIs, React middleware for the app, and the MongoDB database for all the mobile application&apos;s needs',
			'Implemented a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API',
		],
		technologies: ['ReactNative', 'TypeScript', 'Express', 'MongoDB']
	},
	{
		title: 'My Portfolio',
		subtitle: '',
		bulletPoints: [
			'Deployed my own personal website created from scratch with Next.js, Tailwind CSS, and Vercel',
		],
		technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Tailwind']
	},
	{
		title: 'Notre Dame Menu Text App',
		subtitle: '',
		bulletPoints: [
			'Created an automated menu texting app using a MERN stack (MongoDB, Express, React, Node)',
			'Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (Sunday - Saturday). For each day, the user will choose the meal (Breakfast, Lunch, Dinner), the dining hall (North Dining Hall or South Dining Hall), and the notification time.',
			'Admin can post, delete, and edit menus for a dining hall&apos;s meal on any given date.',
		],
		technologies: ['React', 'JavaScript', 'Express', 'MongoDB']
	},
	{
		title: 'Inventory Upload Assistance App',
		subtitle: '',
		bulletPoints: [
			'Developed a web app for <a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> to help customers upload aircraft inventory items into the AeroParts Now database',
			'This app imports a CSV file of inventory items, merges parts&apos; <em>Quantities</em> if their <em>Part Number</em>, <em>Serial Number</em>, <em>Condition Code</em>, and <em>Warehouse Location</em> are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)',
			'Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items',
		],
		technologies: ['React', 'Express', 'HTML', 'CSS']
	},
	{
		title: 'Instagram Insights',
		subtitle: '',
		bulletPoints: [
			'Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you',
			'Instagram doesn&apos;t have a public API that can be used to gather a list of followers, following, unfollowed, and not following back',
		],
		technologies: ['Express', 'EJS', 'Puppeteer', 'HTML', 'CSS']
	}
];