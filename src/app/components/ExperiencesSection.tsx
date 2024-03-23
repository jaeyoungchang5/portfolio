// 'use client';
import React, { useState, useTransition } from 'react'
import Card from './Card';
import { experiences } from '../content';
import { ExpType, ITabProps } from '../types';
import Tabs from './Tabs';


const ExperiencesSection = () => {
    // const [tab, setTab] = useState(ExpType.All);
    // const [isPending, startTransition] = useTransition();
    // const tabs: ITabProps[] = [
    //     { tab: ExpType.All, text: 'All' },
    //     { tab: ExpType.StartUp, text: 'Start-Up' },
    // ];

    // const handleTabChange = (skillType: ExpType) => {
    //     startTransition(() => {
    //         setTab(skillType);
    //     });
    // };
    
    return (
        <section className='' id='experiences'>
            <div className="place-self-center text-slate-200 text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    Experiences
                </h2>

                {/* <div className="justify-start my-2 flex flex-row">
                    <Tabs tabs={tabs} currentTab={tab} updateTabCallback={handleTabChange} />
                </div> */}

                <div className='flex flex-col'>
                    {experiences.map((experience, index) => {
                        // if (tab === ExpType.All || experience.type.includes(tab))
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