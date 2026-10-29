import React from 'react';
import Card from './Card';
import OrgName from './OrgName';
import { experiences, formatDateRange } from '@/content';

const ExperiencesSection = () => (
    <section id='experiences'>
        <div className='place-self-center text-slate-200 text-left justify-self-start'>
            <h2 className='text-4xl font-bold text-blue-400 mb-4'>Experiences</h2>

            <div className='flex flex-col'>
                {experiences.map((experience) => (
                    <Card
                        key={experience.org.name + experience.roles[0].title}
                        tech={experience.tech}
                        entries={experience.roles.map((role) => ({
                            title: role.title,
                            highlights: role.highlights,
                            subtitle: (
                                <>
                                    <OrgName org={experience.org} /> | {formatDateRange(role.dates)}
                                </>
                            ),
                        }))}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default ExperiencesSection;
