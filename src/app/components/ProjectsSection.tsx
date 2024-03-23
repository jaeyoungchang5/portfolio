'use client';
import React, { useState, useTransition } from 'react'
import Card from './Card';
import { projects } from '../content';
import { ITabProps, PrjType } from '../types';
import Tabs from './Tabs';

const ProjectsSection = () => {
    const [tab, setTab] = useState(PrjType.All);
    const [isPending, startTransition] = useTransition();
    const tabs: ITabProps[] = [
        { tab: PrjType.All, text: 'All' },
        { tab: PrjType.FullStack, text: 'Full-Stack' },
        { tab: PrjType.Mobile, text: 'Mobile' },
        { tab: PrjType.Web, text: 'Web' },
    ];

    const handleTabChange = (skillType: PrjType) => {
        startTransition(() => {
            setTab(skillType);
        });
    };

	return (
		<section className='' id='projects'>
            <div className="place-self-center text-slate-200 text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Projects
                </h2>

				<div className="justify-start mt-8 flex flex-row">
					<Tabs tabs={tabs} currentTab={tab} updateTabCallback={handleTabChange} />
				</div>

				<div className='flex flex-col'>
					{projects.map((project, index) => {
						if (tab === PrjType.All || project.type.includes(tab))
							return (
								<Card
									key={index}
									title={project.title} 
									subtitle={project.subtitle} 
									bulletPoints={project.bulletPoints}
									technologies={project.technologies}
									link={project.link}
								/>
							)
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;