import React from 'react'
import { ICardProps } from '../types';
import Card from './Card';

const projects: ICardProps[] = [
	{
		title: 'Swipe & Swing',
		subtitle: 'A Golf Matching Mobile App',
		bulletPoints: [
			'Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences',
			'Developed features to allow users to swipe and match with profiles, message golfers they matched with, and use a map API to find golf courses and book tee times',
			'Designed the backend framework to store and return data from a SQL database',
		],
		technologies: ['ReactNative', 'TypeScript', 'Python', 'SQL']
	},
	{
		title: 'Campus Wayzz',
		subtitle: 'A Location Discovery Mobile App',
		bulletPoints: [
			'Deployed a location discovery mobile application that enable users to find spaces on campus with their friends',
			'Led the development of the entire backend server with APIs, React middleware for the app, and the MongoDB database for all the mobile application&apos;s needs',
			'Implemented a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API',
		],
		technologies: ['ReactNative', 'TypeScript', 'Express', 'MongoDB']
	},
	{
		title: 'My Portfolio',
		subtitle: '',
		bulletPoints: [
			'Deployed my own personal website created from scratch with Next.js, Tailwind CSS, and Vercel',
		],
		technologies: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Tailwind']
	},
	{
		title: 'Notre Dame Menu Text App',
		subtitle: '',
		bulletPoints: [
			'Created an automated menu texting app using a MERN stack (MongoDB, Express, React, Node)',
			'Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (Sunday - Saturday). For each day, the user will choose the meal (Breakfast, Lunch, Dinner), the dining hall (North Dining Hall or South Dining Hall), and the notification time.',
			'Admin can post, delete, and edit menus for a dining hall&apos;s meal on any given date.',
		],
		technologies: ['React', 'JavaScript', 'Express', 'MongoDB']
	},
	{
		title: 'Inventory Upload Assistance App',
		subtitle: '',
		bulletPoints: [
			'Developed a web app for <a class="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> to help customers upload aircraft inventory items into the AeroParts Now database',
			'This app imports a CSV file of inventory items, merges parts&apos; <em>Quantities</em> if their <em>Part Number</em>, <em>Serial Number</em>, <em>Condition Code</em>, and <em>Warehouse Location</em> are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)',
			'Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items',
		],
		technologies: ['React', 'Express', 'HTML', 'CSS']
	},
	{
		title: 'Instagram Insights',
		subtitle: '',
		bulletPoints: [
			'Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you',
			'Instagram doesn&apos;t have a public API that can be used to gather a list of followers, following, unfollowed, and not following back',
		],
		technologies: ['Express', 'EJS', 'Puppeteer', 'HTML', 'CSS']
	}
];

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