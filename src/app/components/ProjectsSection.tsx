import React from 'react'
import Card from './Card';
import { projects } from '../content';

const ProjectsSection = () => {
	return (
		<section className='' id='projects'>
            <div className="place-self-center text-slate-200 text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Projects
                </h2>
				<div className='flex flex-col'>
					{projects.map((project, index) => {
						return (
							<Card
								key={index}
                                title={project.title} 
                                subtitle={project.subtitle} 
                                bulletPoints={project.bulletPoints}
                                technologies={project.technologies}
							/>
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;