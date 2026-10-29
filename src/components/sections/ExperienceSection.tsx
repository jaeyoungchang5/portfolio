import React from 'react';
import Details from '@/components/ui/Details';
import MetaLine from '@/components/ui/MetaLine';
import OrgName from '@/components/ui/OrgName';
import RichText from '@/components/ui/RichText';
import Section from '@/components/ui/Section';
import { experiences, formatDateRange, formatYearSpan, techLabels, type Experience } from '@/content';

// Shared by the featured rows and the "Earlier" row: a label column, then content across the other three.
const rowClass = 'grid gap-x-12 gap-y-2 md:grid-cols-4';
const contentClass = 'min-w-0 md:col-span-3';

const yearSpan = (experience: Experience) => formatYearSpan(experience.roles.map(r => r.dates));

const FeaturedExperience = ({ experience }: { experience: Experience }) => (
    <div className={`${rowClass} border-b border-rule-soft pb-10`}>
        <div className='eyebrow leading-[1.7]'>
            {yearSpan(experience)}
            <br />
            <OrgName org={experience.org} />
        </div>
        <div className={`${contentClass} space-y-7`}>
            {experience.roles.map(role => (
                <div key={role.title}>
                    <h3 className='text-xl font-semibold'>{role.title}</h3>
                    {/* Per-role dates only matter when one company has several roles. */}
                    {experience.roles.length > 1 && <p className='eyebrow mt-0.5'>{formatDateRange(role.dates)}</p>}
                    {role.summary ? (
                        <>
                            <p className='mt-3 text-body'>
                                <RichText text={role.summary} />
                            </p>
                            <Details highlights={role.highlights} />
                        </>
                    ) : (
                        // Without a summary, the highlights show directly instead of behind "Details".
                        role.highlights.map((text, index) => (
                            <p key={index} className='mt-3 text-body'>
                                <RichText text={text} />
                            </p>
                        ))
                    )}
                </div>
            ))}
            <MetaLine items={techLabels(experience.tech)} />
        </div>
    </div>
);

const ExperienceSection = () => {
    const featured = experiences.filter(e => e.featured);
    const earlier = experiences.filter(e => !e.featured);

    return (
        <Section id='experience' title='Experience'>
            <div className='space-y-10'>
                {featured.map(experience => (
                    <FeaturedExperience key={experience.org.name + experience.roles[0].title} experience={experience} />
                ))}

                <div className={rowClass}>
                    <h3 className='eyebrow font-normal'>Earlier</h3>
                    <ul className={`${contentClass} space-y-2.5`}>
                        {earlier.map(experience => (
                            <li
                                key={experience.org.name + experience.roles[0].title}
                                className='flex flex-wrap justify-between gap-x-4 gap-y-1'
                            >
                                <span>
                                    {experience.roles[0].title}, <OrgName org={experience.org} />
                                </span>
                                <span className='eyebrow'>{yearSpan(experience)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default ExperienceSection;
