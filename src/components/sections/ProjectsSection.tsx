import React from 'react';
import Anchor from '@/components/ui/Anchor';
import Details from '@/components/ui/Details';
import MetaLine from '@/components/ui/MetaLine';
import RichText from '@/components/ui/RichText';
import Section from '@/components/ui/Section';
import SocialButton from '@/components/ui/SocialButton';
import { projects, techLabels, type Project } from '@/content';

/** Links to the live site when there is one, otherwise the repo. */
const ProjectName = ({ project }: { project: Project }) => {
    const href = project.live ?? project.repo;
    const className = 'font-serif text-card-title font-medium text-ink';
    return href ? (
        <Anchor href={href} className={`${className} underline-offset-4 hover:underline`}>
            {project.name}
        </Anchor>
    ) : (
        <span className={className}>{project.name}</span>
    );
};

const ProjectsSection = () => (
    <Section id='projects' title='Selected projects'>
        <div className='grid gap-12 sm:grid-cols-2'>
            {projects.map(project => (
                <article key={project.name}>
                    <p className='eyebrow mb-2'>{project.label}</p>
                    <h3 className='mb-2'>
                        <ProjectName project={project} />
                    </h3>
                    <p className='text-body'>
                        <RichText text={project.summary} />
                    </p>
                    <MetaLine items={techLabels(project.tech)} className='mt-3' />
                    <Details highlights={project.highlights} />
                </article>
            ))}
        </div>

        <div className='mt-12'>
            <SocialButton kind='github' label='More on GitHub' />
        </div>
    </Section>
);

export default ProjectsSection;
