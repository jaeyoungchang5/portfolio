"use client";
import React, { useTransition, useState } from "react";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>Sequelize</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<div>
				<p>University of Notre Dame</p>
				<ul className="list-disc pl-2">
				<li>Bachelors of Science, Computer Science</li>
				<li>Minor in Engineering Corporate Practice</li>
				</ul>
			</div>
		),
	}
];

const AboutSection = () => {

	return (
		<section className="text-white mt-4" id="about">
			<div className="mt-4 md:mt-0 text-center flex flex-col h-full">
				<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
				<p className="text-left text-base lg:text-lg">
					I am a full-stack engineer at Epic Systems, the nation&apos;s leader in Healthcare Software. 
					I graduated from the University of Notre Dame in 2022 with a BS in Computer Science and a Minor in Engineering Corporate Practice. 
					
					<br></br>
				</p>
			</div>
		</section>
	);
};

export default AboutSection;
