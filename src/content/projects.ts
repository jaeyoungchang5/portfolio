import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'Pixel Dash',
        tagline: 'A hardware + cloud smart display',
        status: '2026, in progress',
        highlights: [
            'Building a Tidbyt-inspired smart display: a 64x32 RGB LED matrix driven by an Adafruit MatrixPortal M4, paired with a custom cloud backend',
            'Built as a monorepo with two independently deployed pieces: firmware (C++/PlatformIO) flashed to the physical device, and a backend API (TypeScript/Express) running on Google Cloud Run',
            "Designed the device-to-cloud contract: the device polls one endpoint, and the API returns pre-simplified data for the user's widgets (weather, CTA transit arrivals, sports scores, and more) to fit the firmware's limited memory",
            'Maintain a shared widget-type contract kept in sync across the embedded firmware and the backend as new widgets are added',
        ],
        tech: ['CPlusPlus', 'PlatformIO', 'TypeScript', 'Express', 'CloudRun', 'SQL'],
        categories: ['full-stack', 'hardware'],
    },
    {
        name: 'My Portfolio',
        highlights: ['Deployed my own personal website with Next.js, Tailwind CSS, and Vercel'],
        tech: ['Next', 'React', 'TypeScript', 'Vercel', 'Tailwind'],
        categories: ['web'],
        repo: 'https://github.com/jaeyoungchang5/portfolio',
    },
    {
        name: 'Swipe & Swing',
        tagline: 'A golf matching mobile app',
        highlights: [
            'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
            'Earned 1st place award in class for best application',
            'Developed features to allow users to swipe and match with profiles (think Tinder), message golfers they matched with, and use a map API to find golf courses and book tee times',
            'Designed the backend framework to store and return data from a SQL database',
        ],
        tech: ['ReactNative', 'TypeScript', 'Python', 'SQL'],
        categories: ['full-stack', 'mobile'],
        repo: 'https://github.com/jaeyoungchang5/swipe-and-swing',
    },
    {
        name: 'Campus Wayzz',
        tagline: 'A location discovery mobile app',
        highlights: [
            'Deployed a location discovery mobile application that enables users to find spaces on campus with their friends',
            'Owned the development of the entire backend server, mobile app middleware, and the MongoDB database',
            'Developed a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API',
            'Earned one of three perfect project grades in class',
        ],
        tech: ['ReactNative', 'TypeScript', 'Express', 'MongoDB'],
        categories: ['full-stack', 'mobile'],
        repo: 'https://github.com/jaeyoungchang5/campuswayzz',
    },
    {
        name: 'Notre Dame Menu Text App',
        highlights: [
            'Created an automated menu texting app using a MERN stack (MongoDB, Express, React, Node)',
            'Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (Sunday - Saturday). For each day, the user will choose the meal (Breakfast, Lunch, Dinner), the dining hall (North Dining Hall or South Dining Hall), and the notification time.',
            "Admin can post, delete, and edit menus for a dining hall's meal on any given date.",
        ],
        tech: ['React', 'JavaScript', 'Express', 'MongoDB'],
        categories: ['full-stack', 'web'],
        repo: 'https://github.com/jaeyoungchang5/menu-text-app',
    },
    {
        name: 'Inventory Upload Assistance App',
        highlights: [
            'Developed a web app for [AeroParts Now](https://aeropartsnow.com/) to help customers upload aircraft inventory items into the AeroParts Now database',
            "This app imports a CSV file of inventory items, merges parts' _Quantities_ if their _Part Number_, _Serial Number_, _Condition Code_, and _Warehouse Location_ are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)",
            'Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items',
        ],
        tech: ['React', 'JavaScript', 'Express', 'HTML', 'CSS'],
        categories: ['full-stack', 'web'],
        repo: 'https://github.com/jaeyoungchang5/inventory-app',
    },
    {
        name: 'Instagram Insights',
        highlights: [
            'Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you',
            "Used the Puppeteer headless browser to scrape data because Instagram doesn't have a public API that can be used to gather a list of followers, following, unfollowed, and not following back",
        ],
        tech: ['JavaScript', 'Express', 'Puppeteer', 'HTML', 'CSS'],
        categories: ['full-stack', 'web'],
        repo: 'https://github.com/jaeyoungchang5/instagram-project',
    },
];
