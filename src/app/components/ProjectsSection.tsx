'use client';
import React, { useState } from 'react';
import Card from './Card';
import ExternalLink from './ExternalLink';
import Tabs, { type Tab } from './Tabs';
import { projects, type ProjectCategory } from '@/content';

type Filter = ProjectCategory | 'all';

const tabs: Tab<Filter>[] = [
    { value: 'all', label: 'All' },
    { value: 'full-stack', label: 'Full-Stack' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'web', label: 'Web' },
];

const ProjectsSection = () => {
    const [filter, setFilter] = useState<Filter>('all');
    const visible = projects.filter((p) => filter === 'all' || p.categories.includes(filter));

    return (
        <section id='projects'>
            <div className='place-self-center text-slate-200 text-left justify-self-start'>
                <h2 className='text-4xl font-bold text-blue-400 mb-4'>Projects</h2>

                <div className='justify-start my-2 flex flex-row'>
                    <Tabs tabs={tabs} current={filter} onChange={setFilter} />
                </div>

                <div className='flex flex-col'>
                    {visible.map((project) => {
                        const parts: React.ReactNode[] = [project.tagline, project.status].filter(Boolean);
                        if (project.repo)
                            parts.push(
                                <ExternalLink key='repo' href={project.repo} className='funderline'>
                                    View repo
                                </ExternalLink>,
                            );
                        return (
                            <Card
                                key={project.name}
                                tech={project.tech}
                                entries={[
                                    {
                                        title: project.name,
                                        highlights: project.highlights,
                                        subtitle: parts.length
                                            ? parts.map((part, i) => (
                                                  <React.Fragment key={i}>
                                                      {i > 0 && ' | '}
                                                      {part}
                                                  </React.Fragment>
                                              ))
                                            : undefined,
                                    },
                                ]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
