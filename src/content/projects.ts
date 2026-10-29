import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'FairShare',
        label: '2026 · In progress',
        summary:
            "Split a check with friends: the organizer enters the receipt and shares a link, everyone taps what they ordered, and FairShare works out each person's share of tax, fees, and tip.",
        highlights: [
            'Monorepo with three TypeScript projects: a pure split-calculation engine shared by a Next.js web app and an Express 5 API',
            "Handles money as integer cents with defined rounding and tie-breaking rules, so everyone's shares add up to the exact bill",
            'Session auth with scrypt-hashed passwords and hashed bearer tokens; Postgres on Supabase; web and API on Cloud Run',
            'Shareable join links let everyone at the table sign in and claim their own items from their phone',
        ],
        tech: ['TypeScript', 'Next', 'React', 'Express', 'PostgreSQL', 'CloudRun'],
        live: 'https://fairshare.builtbyjyc.com/',
    },
    {
        name: 'Pixel Dash',
        label: '2026 · In progress',
        summary:
            'A 64×32 LED smart display with its own cloud backend. C++ firmware polls one endpoint; a TypeScript API on Cloud Run returns pre-simplified widget data that fits in device memory.',
        highlights: [
            'Building a Tidbyt-inspired smart display: a 64x32 RGB LED matrix driven by an Adafruit MatrixPortal M4, paired with a custom cloud backend',
            'Built as a monorepo with two independently deployed pieces: firmware (C++/PlatformIO) flashed to the physical device, and a backend API (TypeScript/Express) running on Google Cloud Run',
            "Designed the device-to-cloud contract: the device polls one endpoint, and the API returns pre-simplified data for the user's widgets (weather, CTA transit arrivals, sports scores, and more) to fit the firmware's limited memory",
            'Maintain a shared widget-type contract kept in sync across the embedded firmware and the backend as new widgets are added',
        ],
        tech: ['CPlusPlus', 'PlatformIO', 'TypeScript', 'Express', 'CloudRun', 'SQL'],
    },
    {
        name: 'Swipe & Swing',
        label: 'Mobile · 1st place in class',
        summary:
            'Golf partner matching: swipe on profiles, message matches, find courses and book tee times. React Native front end with a Python and SQL backend.',
        highlights: [
            'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
            'Earned 1st place award in class for best application',
            'Developed features to allow users to swipe and match with profiles (think Tinder), message golfers they matched with, and use a map API to find golf courses and book tee times',
            'Designed the backend framework to store and return data from a SQL database',
        ],
        tech: ['ReactNative', 'TypeScript', 'Python', 'SQL'],
        repo: 'https://github.com/jaeyoungchang5/swipe-and-swing',
    },
    {
        name: 'My Portfolio',
        label: 'Web · This site',
        summary:
            'My personal website. A static Next.js site whose content lives in typed data files, served with a strict Content-Security-Policy.',
        highlights: [
            'Experience, projects, and skills live in typed TypeScript files, so a typo in a technology name fails the build',
            'Ships as static HTML with security headers and a Content-Security-Policy that only allows its own scripts, styles, and fonts',
            'Built with Next.js, React, and Tailwind CSS; deployed on Vercel',
        ],
        tech: ['Next', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
        repo: 'https://github.com/jaeyoungchang5/portfolio',
    },
];
