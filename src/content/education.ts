import type { Education } from './types';

export const education: Education[] = [
    {
        school: { name: 'University of Notre Dame', url: 'https://www.nd.edu' },
        degree: 'BS in Computer Science',
        minor: 'Minor in Engineering Corporate Practice',
        dates: { start: '2018-08', end: '2022-05' },
        gpa: '3.705',
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
