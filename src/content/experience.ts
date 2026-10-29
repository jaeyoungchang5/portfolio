import type { Experience } from './types';

const apex = { name: 'Apex Fintech Solutions', url: 'https://apexfintechsolutions.com' };
const epic = { name: 'Epic Systems', url: 'https://www.epic.com/' };

export const experiences: Experience[] = [
    {
        org: apex,
        roles: [
            {
                title: 'Senior Software Engineer & Team Lead',
                dates: { start: '2026-07' },
                summary:
                    "Lead a team of three as a player-coach. Delivered the engineering that brought Fisher Investments and State Street live on Apex's wealth management platform, as one of the first Squad Captains in Apex's squad model.",
                highlights: [
                    "Lead a team of three engineers as a player-coach: I write and review code daily and own the team's technical decisions",
                    "Delivered the engineering work that brought Fisher Investments and State Street live on Apex's wealth management platform",
                    "One of the first team leads (Squad Captains) in Apex's squad model, where small cross-functional squads own initiatives from build through release and production support",
                    'Partner with Product and Technical Solutions Architects to validate specs before build: pressure-testing requirements against how the systems actually work, flagging gaps and edge cases early, and agreeing on design tradeoffs so my team can make implementation calls on its own within that architecture',
                    'Participate in the company-wide production on-call rotation',
                ],
            },
            {
                title: 'Software Engineer II, Securities Lending',
                dates: { start: '2024-07', end: '2026-06' },
                summary:
                    'Built the core services behind a $100M+ securities lending business. Led the migration of Apex Lend Plus and Stock Locates from on-prem to Google Cloud, which now serve nearly all production traffic.',
                highlights: [
                    "Built the core services behind Apex's Securities Lending program, a $100M+ revenue business, across product offerings for trading, contract management, inventory management, and revenue allocation",
                    'Led the migration of Apex Lend Plus and Stock Locates from on-prem to Google Cloud (GKE, Cloud Run, PostgreSQL, Redis, BigQuery), which now serve nearly all production traffic for managing contracts and inventory, surfacing insights, and acting on recommendations',
                    "Partnered directly with Apex's securities lending traders to identify friction in their daily workflows and delivered tailored solutions",
                    'Served on the RIA Trade Away Tiger Team, a client initiative that let traders execute trades away from Apex as their clearing platform, working across accounts, client configuration, and trade execution domains',
                    'Provided production support across both modern cloud-native and legacy on-premises systems',
                    'Built Claude agents and skills that every engineer on the team uses for code review, test generation, internal documentation, and cloud-migration work',
                    'Mentored junior engineers and led cross-domain initiatives across the engineering organization',
                ],
            },
        ],
        tech: [
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
        featured: true,
    },
    {
        org: epic,
        roles: [
            {
                title: 'Full-Stack Software Engineer',
                dates: { start: '2022-08', end: '2024-07' },
                summary:
                    "Owned the Skin Cancer History project for Epic's Dermatology application end to end: shadowing dermatologists across the country, design, full-stack development, and post-launch usability testing.",
                highlights: [
                    "Owned the Skin Cancer History project for Epic's Dermatology application end to end: user research, design, full-stack development, and post-launch usability testing",
                    'Shadowed and interviewed practicing dermatologists across the country to understand gaps in their documentation workflows',
                    "Shipped full-stack clinical software to help dermatologists document patients' skin conditions",
                    'Discovered, investigated, and fixed hundreds of production bugs in live clinical systems',
                    'Supported the company-wide move from SVN to Git',
                ],
            },
        ],
        tech: ['React', 'TypeScript', 'CSharp', 'Dotnet', 'Git', 'Cache'],
        featured: true,
    },
    {
        org: { name: 'Wealth Kitchen Inc.' },
        roles: [
            {
                title: 'Co-Founder',
                dates: { start: '2023-06', end: '2024-03' },
                summary:
                    'Co-founded a software company building tools for mid-sized RIA firms and their wealth managers.',
                highlights: [
                    'Co-founded a software company solving everyday problems for mid-sized RIA firms and their wealth managers',
                    "Built a platform that brings advisors' daily tools into one view and suggests next tasks, so nothing falls through the cracks and advisors can focus on the work that matters most",
                ],
            },
        ],
        tech: [],
        featured: true,
    },
    {
        org: { name: 'YOKE', url: 'https://www.linkedin.com/company/yoketeam/' },
        roles: [
            {
                title: 'Software Engineer',
                dates: { start: '2021-08', end: '2021-12' },
                highlights: [
                    'Built React/TypeScript features to enhance the way student athletes maximize their name, image, and likeness',
                ],
            },
        ],
        tech: ['React', 'TypeScript', 'Git'],
    },
    {
        org: { name: 'University of Notre Dame', url: 'https://www.nd.edu' },
        roles: [
            {
                title: 'Undergraduate Teaching Assistant',
                dates: { start: '2020-08', end: '2021-12' },
                highlights: [
                    "Helped teach hundreds of students in Fundamentals of Computing (CSE 20311), Notre Dame's introductory computer science course",
                ],
            },
        ],
        tech: [],
    },
    {
        org: epic,
        roles: [
            {
                title: 'Software Development Intern',
                dates: { start: '2021-06', end: '2021-08', label: 'Summer 2021' },
                highlights: [
                    'Prototyped a full-stack tool that shows patients a detailed preview of medical record data a third-party app is requesting, built to health care data exchange standards',
                ],
            },
        ],
        tech: [],
    },
    {
        org: { name: 'The IDEA Center', url: 'https://ideacenter.nd.edu/' },
        roles: [
            {
                title: 'Jr. Software Engineer',
                dates: { start: '2020-06', end: '2020-08', label: 'Summer 2020' },
                highlights: [
                    'Built an eCommerce web app with user authentication, product listings, Stripe payments, an admin console, and customizable email notifications',
                ],
            },
        ],
        tech: ['React', 'JavaScript', 'Redux', 'Express', 'Git'],
    },
    {
        org: { name: 'AeroParts Now', url: 'https://aeropartsnow.com/' },
        roles: [
            {
                title: 'Product Management Intern',
                dates: { start: '2020-06', end: '2020-08', label: 'Summer 2020' },
                highlights: [
                    "Automated uploading customers' aircraft inventory into the APN database, cutting upload time by 5 hours",
                    "Defined APN's 2020/2021 product roadmap: scope of work, module breakdown, time-cost estimates, and priorities",
                    "Configured APN's Pipedrive CRM with automation, dashboard reports, and feature enhancements",
                ],
            },
        ],
        tech: ['React', 'JavaScript', 'Express', 'HTML', 'CSS', 'Git'],
    },
    {
        org: { name: 'Simon Group Holdings', url: 'https://www.simongroupholdings.com/' },
        roles: [
            {
                title: 'Technology Project Management Intern',
                dates: { start: '2019-05', end: '2020-02' },
                highlights: [
                    'Implemented Salesforce CRM across several SGH companies in under two months, including legacy data migration, data separation between companies, and company-specific enhancements',
                    "[Visited](https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA) [Fuel Automation Station's](https://fluidautomationstation.com/) (FAS) Command Center and frac sites near Houston to learn operators' needs and find improvements for FAS's cloud software",
                    "Identified FAS's most strategic customers by analyzing crude oil price trends against customer revenue and frac unit utilization, refocusing the sales team",
                    "[Exhibited at ADIPEC 2019](https://photos.app.goo.gl/osEqMRQajRicLNS5A) in Abu Dhabi, showcasing FAS's software to thousands of attendees and leading to a deal with [Saudi Drill Company](https://saudidrill.com)",
                    "Built an online inventory management system for FAS's U.S. warehouses and designed dashboard reports for its cloud software",
                ],
            },
        ],
        tech: ['Salesforce'],
    },
];
