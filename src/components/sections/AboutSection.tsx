import React from 'react';
import Details from '@/components/ui/Details';
import MetaLine from '@/components/ui/MetaLine';
import OrgName from '@/components/ui/OrgName';
import RichText from '@/components/ui/RichText';
import Section from '@/components/ui/Section';
import { education, formatYearSpan, profile } from '@/content';

const AboutSection = () => (
    <Section id='about' title='About' aside>
        <div className='space-y-[18px] text-body'>
            {profile.about.map((paragraph, index) => (
                <p key={index}>
                    <RichText text={paragraph} />
                </p>
            ))}
        </div>

        <h3 className='eyebrow mb-2 mt-9 font-normal'>Education</h3>
        {education.map(entry => (
            <div key={entry.school.name}>
                <p>
                    {entry.degree}, <OrgName org={entry.school} />
                </p>
                <MetaLine items={[formatYearSpan([entry.dates]), entry.minor, entry.gpa && `GPA ${entry.gpa}`]} />
                {entry.coursework && <Details highlights={[`Coursework: ${entry.coursework.join(', ')}`]} />}
            </div>
        ))}
    </Section>
);

export default AboutSection;
