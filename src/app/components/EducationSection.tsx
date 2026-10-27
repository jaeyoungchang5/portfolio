import React from 'react';
import Card from './Card';
import { education, formatDateRange } from '@/content';

const EducationSection = () => (
    <section id='education'>
        <div className='place-self-center text-slate-200 text-left justify-self-start'>
            <h2 className='text-4xl font-bold text-blue-400 mb-4'>Education</h2>
        </div>

        <div className='flex flex-col'>
            {education.map((entry) => (
                <Card
                    key={entry.school.name}
                    tech={[]}
                    entries={[
                        {
                            title: entry.school.name,
                            subtitle: [formatDateRange(entry.dates), entry.gpa && `GPA: ${entry.gpa}`]
                                .filter(Boolean)
                                .join(' | '),
                            highlights: [
                                ...entry.highlights,
                                ...(entry.coursework ? [`Relevant Courses: ${entry.coursework.join(', ')}`] : []),
                            ],
                        },
                    ]}
                />
            ))}
        </div>
    </section>
);

export default EducationSection;
