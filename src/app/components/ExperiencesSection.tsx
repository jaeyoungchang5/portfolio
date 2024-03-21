import React from 'react'
import Card from './Card';
import { experiences } from '../content';


const ExperiencesSection = () => {
    return (
        <section className='' id='experiences'>
            <div className="place-self-center text-slate-200 text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Experiences
                </h2>
                <div className='flex flex-col'>
                    {experiences.map((experience, index) => {
                        return (
                            <Card 
                                key={index}
                                title={experience.title} 
                                subtitle={experience.subtitle} 
                                bulletPoints={experience.bulletPoints}
                                technologies={experience.technologies}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default ExperiencesSection;