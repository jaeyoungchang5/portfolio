import type { Education } from './types';

export const education: Education[] = [
    {
        school: { name: 'University of Notre Dame', url: 'https://www.nd.edu' },
        degree: 'BS in Computer Science',
        dates: { start: '2018-08', end: '2022-05', label: '2018 – 2022' },
        gpa: '3.705',
        highlights: [
            'Graduated with a BS in Computer Science from the College of Engineering',
            'Earned a Minor in Engineering Corporate Practice',
        ],
        coursework: [
            'Data Structures',
            'Algorithms',
            'Operating Systems',
            'Systems Programming',
            'Advanced Databases',
            'Computer Architecture',
            'Logic Design',
            'Theory of Computing',
            'Programming Paradigms',
            'Secure Software Engineering',
            'Data Science',
            'Droid Building',
            'Discrete Mathematics',
        ],
    },
];
