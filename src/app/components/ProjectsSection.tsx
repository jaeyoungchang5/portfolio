import React from 'react'

const ProjectsSection = () => {
	return (
		<section className='sm:py-2 lg:py-8' id='projects'>
			<div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
				<h2 className="text-4xl font-bold text-blue-400 mt-10 mb-8 md:mb-12">
					My Projects
				</h2>
				<div id="swipe-and-swing" className="content align-left story">
					<div className="story-header">
						<h2>Swipe & Swing</h2>
						<span className="sub-header">
							<p className="content-separator">using</p>
							<h3>React Native, TypeScript, Python, SQL</h3>
						</span>
					</div>
					<p></p>
					<ul>
						<li>Launched a golf mobile app that allows golfers to find nearby matches with similar golfing preferences</li>
						<li>Developed features to allow users to swipe and match with profiles, message golfers they matched with, and use a
							map API to find golf courses and book tee times</li>
						<li>Designed the backend framework to store and return data from a SQL database</li>
					</ul>
					<div className="github-repo"><a href="https://github.com/jaeyoungchang5/swipe-and-swing" className="button small" target="_blank">View Repo <i className="fab fa-github"></i></a></div>
				</div>
				
				<br></br>

				<div id="campus-wayzz" className="content align-left story">
					<div className="story-header">
						<h2>Campus Wayzz</h2>
						<span className="sub-header">
							<p className="content-separator">using</p>
							<h3>React Native, Node.js, Express.js, MongoDB</h3>
						</span>
					</div>
					<p></p>
					<ul>
						<li>Deployed a location discovery mobile application that enable users to find spaces on campus with their friends</li>
						<li>Led the development of the entire backend server with APIs, React middleware for the app, and the MongoDB database for all the mobile application’s needs</li>
						<li>Implemented a feature to allow users to create custom, shareable meetups (via link or app) with friends, from which users could see how far others were from their meetup destination via a map API</li>
					</ul>
					<div className="github-repo"><a href="https://github.com/jaeyoungchang5/campuswayzz" className="button small" target="_blank">View Repo <i className="fab fa-github"></i></a></div>
				</div>
				<br></br>
				<div id="idea-marketplace" className="content align-left story">
					<div className="story-header">
						<h2>Notre Dame Menu Text App</h2>
						<span className="sub-header">
							<p className="content-separator">using</p>
							<h3>React JavaScript, Node.js, Express.js, MongoDB</h3>
						</span>
					</div>
					<p></p>
					<ul>
						<li>Automated menu texting app built with a MERN stack (MongoDB, Express, React, Node)</li>
						<li>Users can securely login/signup and configure a detailed schedule for menu text notifications. Schedules can be made for each day of the week (Sunday - Saturday). For each day, the user will choose the meal (Breakfast, Lunch, Dinner), the dining hall (North Dining Hall or South Dining Hall), and the notification time.</li>
						<li>Admin can post, delete, and edit menus for a dining hall&apos;s meal on any given date.</li>
					</ul>
					<div className="github-repo"><a href="https://github.com/jaeyoungchang5/menu-text-app" className="button small" target="_blank">View Repo <i className="fab fa-github"></i></a></div>
				</div>
				<br></br>
				<div id="inventory-app" className="content align-left story">
					<div className="story-header">
						<h2>Inventory Upload Assistance App</h2>
						<span className="sub-header">
							<p className="content-separator">using</p>
							<h3>React, Node.js, HTML, CSS</h3>
						</span>
					</div>
					<p></p>
					<ul>
						<li>Developed a web app for <a className="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a> to help customers upload aircraft inventory items into the AeroParts Now database</li>
						<li>This app imports a CSV file of inventory items, merges parts&apos; <em>Quantities</em> if their <em>Part Number</em>, <em>Serial Number</em>, <em>Condition Code</em>, and <em>Warehouse Location</em> are the same, and exports the merged inventory in multiple CSV files (960 inventory items per file)</li>
						<li>Used this app to deal with inventory in the range of 10,000 - 90,000 inventory items</li>
					</ul>
					<div className="github-repo"><a href="https://github.com/jaeyoungchang5/inventory-app" className="button small" target="_blank">View Repo <i
							className="fab fa-github"></i></a></div>
				</div>
				<br></br>
				<div id="instagram-insights" className="content align-left story">
					<div className="story-header">
						<h2>Instagram Insights</h2>
						<span className="sub-header">
							<p className="content-separator">using</p>
							<h3>Node.js, Express.js, EJS, Puppeteer, HTML, CSS</h3>
						</span>
					</div>
					<p></p>
					<ul>
						<li>Developed a web app that scrapes your Instagram followers & following (via a Headless Browser), and returns a list of users who are not following you back & users who have unfollowed you</li>
						<li>Instagram doesn&apos;t have a public API that can be used to gather a list of followers, following, unfollowed, and not following back</li>
					</ul>
					<div className="github-repo"><a href="https://github.com/jaeyoungchang5/instagram-project" className="button small" target="_blank">View Repo <i className="fab fa-github"></i></a></div>	
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;