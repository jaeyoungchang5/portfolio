import React from 'react'
import Card from './Card';
import { ICardProps } from '../types';

const experiences: ICardProps[] = [
    {
        title: 'Full-Stack Software Engineer',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | August 2022 - Present',
        bulletPoints: [
            'Spearheaded multiple projects for Epic&apos;s Dermatology Application, overseeing all aspects from design and end-user interviews to full-stack development and post-implementation usability testing',
            'Developed full-stack solutions to help dermatologists document patients&apos; skin conditions',
            'Discovered, investigated, and fixed hundreds of bugs',
            'Helped facilitate the company-wide move from SVN to Git',
        ],
        technologies: ['TypeScript', 'CSharp', 'Dotnet', 'Git', 'MUMPS', 'Cache']
    },
    {
        title: 'Software Engineering Intern',
        subtitle: '<a href="https://www.epic.com/" target="_blank" class="funderline">Epic Systems</a> | Summer 2021',
        bulletPoints: [
            'Prototyped a full-stack solution that shows patients a detailed preview of medical record information requested by 3rd party apps, while adhering to health care data exchange standards',
        ],
        technologies: ['React', 'TypeScript', 'CSharp', 'Git']
    },
    {
        title: 'Jr. Software Engineer',
        subtitle: '<a class="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a> | Summer 2020',
        bulletPoints: [
            'Built an eCommerce web app equipped with user authentication, product listings, Stripe-payment integration, an admin console, and customizable email notifications (<a class="funderline" href="#idea-marketplace">Read More</a>)',
        ],
        technologies: ['React', 'JavaScript', 'Redux', 'Express']
    },
    {
        title: 'Product Management Intern',
        subtitle: '<a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> | Summer 2020',
        bulletPoints: [
            'Automated uploading customers&apos; aircraft inventory into the APN Database, decreasing the upload time by 5 hours (<a class="funderline" href="#inventory-app">Read More</a>)',
            'Defined APN&apos;s 2020/2021 Product Development Roadmap (Scope of Work for development team, categorization of modules & sub-modules, calculation of time-costs, and determination of priority)',
            'Configured APN&apos;s Pipedrive CRM with automation, dashboard reports, and feature enhancements',
        ],
        technologies: ['React']
    },
    {
        title: 'Technology Project Management Intern',
        subtitle: '<a class="funderline" href="https://www.simongroupholdings.com/" target="_blank">Simon Group Holdings</a> | May 2019 - Feb 2020',
        bulletPoints: [
            'Completed an implementation of Salesforce CRM for several SGH companies in under two months, including historical data migration from each company&apos;s legacy CRM, data security between each company, and feature enhancements for each company',
            'Designed UI/UX for dashboard reports in Fuel Automation Station&apos;s (FAS) cloud software',
            'Identified FAS&apos;s strategic customers by analyzing trends in crude oil price in relation to customers&apos; revenue and utilization of fracking units, shifting the sales team&apos;s focus to the most strategic and profitable customers',
            'Created an online inventory management system for FAS&apos;s warehouses around the U.S.',
            '<a class="funderline" href="https://photos.app.goo.gl/osEqMRQajRicLNS5A" target="_blank">Exhibited in ADIPEC</a> (<a class="funderline" href="https://www.adipec.com/" target="_blank">Abu Dhabi International Petroleum Exhibition & Conference</a>) and showcased FAS&apos;s software capabilities to thousands of attendees, resulting in a deal with Saudi Drill Company (November 2019)',
            '<a class="funderline" href="https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA" target="_blank">Flown out to FAS&apos;s Command Center and Operating Frac Sites</a> in the Houston (TX) area to research the needs of operators and identify places for improvements for the Cloud Software (August 2019)',
        ],
        technologies: ['Salesforce']
    }
];

const ExperiencesSection = () => {
    return (
        <section className='' id='experiences'>
            <div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">
                    My Experiences
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