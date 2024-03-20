import React from 'react'

const ExperiencesSection = () => {
    return (
        <section className='sm:py-2 lg:py-8' id='experiences'>
            <div className="place-self-center text-center text-slate-200 lg:text-left justify-self-start">
                <h2 className="text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
                    My Experiences
                </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="story-header">
                    <h2>Full-Stack Software Engineer</h2>
                    <span className="sub-header">
                        <p className="content-separator">@</p>
                        <h3><a className="ffunderline" href="https://www.epic.com/" target="_blank">Epic Systems</a></h3>
                    </span>
                    <span className="date-location"><p>August 2022 - Present<span className="content-separator">|</span>Madison, WI</p></span>
                </div>
                <ul>
                    <li>Spearheaded multiple projects for Epic&apos;s Dermatology Application, overseeing all aspects from design and end-user
                        interviews to full-stack development and post-implementation usability testing</li>
                    <li>Developed full-stack solutions to help dermatologists document patients&apos; skin conditions</li>
                    <li>Discovered, investigated, and fixed hundreds of bugs</li>
                    <li>Helped facilitate the company-wide move from SVN to Git</li>
                </ul>
                <div className="sub-descriptor">
                    <strong>Technologies Used:</strong> TypeScript, C#, .NET, MUMPS, Cache, Git
                </div>
                </div>

                <br></br>

                <div className="content align-left story">
                    <div className="story-header">
                        <h2>Software Development Intern</h2>
                        <span className="sub-header">
                            <p className="content-separator">@</p>
                            <h3><a className="funderline" href="https://www.epic.com/" target="_blank">Epic Systems</a></h3>
                        </span>
                        <span className="date-location"><p>Summer 2021<span className="content-separator">|</span>Madison, WI</p></span>
                    </div>
                    <ul>
                        <li>Prototyped a full-stack solution that shows patients a detailed preview of medical record information requested by 3rd
                            party apps, while adhering to health care data exchange standards</li>
                    </ul>
                    <div className="sub-descriptor">
                        <strong>Technologies Used:</strong> React, TypeScript, C#, HL7 FHIR, Git
                    </div>
                </div>

                <br></br>

                <div className="content align-left story">
                    <div className="story-header">
                        <h2>Jr. Software Engineer</h2>
                        <span className="sub-header">
                            <p className="content-separator">@</p>
                            <h3><a className="funderline" href="https://ideacenter.nd.edu/" target="_blank">The IDEA Center</a></h3>
                        </span>
                        <span className="date-location"><p>Summer 2020<span className="content-separator">|</span>South Bend, IN - Remote</p></span>
                    </div>
                    <ul>
                        <li>Built an eCommerce web app equipped with user authentication, product listings, Stripe-payment integration, an
                            admin console, and customizable email notifications (<a className="funderline" href="#idea-marketplace">Read More</a>)</li>
                        <li>Implemented upsell-popups on Olüsmile&apos;s marketplace web app</li>
                    </ul>
                    <div className="sub-descriptor">
                        <strong>Technologies Used:</strong> React, JavaScript, Redux, Node.js
                    </div>
                </div>

                <br></br>

                <div className="content align-left story">
                    <div className="story-header">
                        <h2>Product Management Intern</h2>
                        <span className="sub-header">
                            <p className="content-separator">@</p>
                            <h3><a className="funderline" href="https://aeropartsnow.com/" target="_blank">AeroParts Now</a></h3>
                        </span>
                        <span className="date-location"><p>Summer 2020<span className="content-separator">|</span>Savannah, GA - Remote</p></span>
                    </div>
                    <ul>
                        <li>Automated uploading customers’ aircraft inventory into the APN Database, decreasing the upload time by 5 hours (<a className="funderline" href="#inventory-app">Read More</a>)</li>
                        <li>Defined APN’s 2020/2021 Product Development Roadmap (Scope of Work for development team, categorization of modules & sub-modules, calculation of time-costs, and determination of priority)</li>
                        <li>Configured APN’s Pipedrive CRM with automation, dashboard reports, and feature enhancements</li>
                    </ul>
                    <div className="sub-descriptor">
                        <strong>Technologies Used:</strong> React, HTML, Pipedrive
                    </div>
                </div>

                <br></br>

                <div className="content align-left story">
                    <div className="story-header">
                        <h2>Technology Project Management Intern</h2>
                        <span className="sub-header">
                            <p className="content-separator">@</p>
                            <h3><a className="funderline" href="https://www.simongroupholdings.com/" target="_blank">Simon Group Holdings</a></h3>
                        </span>
                        <span className="date-location"><p>Summer 2019 - Spring 2020<span className="content-separator">|</span>Birmingham, MI</p></span>
                    </div>
                    <ul>
                        <li>
                            Completed an implementation of Salesforce CRM for several SGH companies in under two months, including historical data migration from each company’s legacy CRM, data security between each company, and feature enhancements for each company
                        </li>
                        <li>
                            Designed UI/UX for dashboard reports in Fuel Automation Station’s (FAS) cloud software
                        </li>
                        <li>
                            Identified FAS’s strategic customers by analyzing trends in crude oil price in relation to customers&apos; revenue and utilization of fracking units, shifting the sales team’s focus to the most strategic and profitable customers
                        </li>
                        <li>
                            Created an online inventory management system for FAS’s warehouses around the U.S.
                        </li>
                        <li>
                            Exhibited in <a className="funderline" href="https://www.adipec.com/" target="_blank">ADIPEC (Abu Dhabi International Petroleum Exhibition & Conference)</a> and 
                            showcased FAS’s software capabilities to thousands of attendees, resulting in a deal with Saudi Drill Company (November 2019)
                            <span className="content-separator"></span>
                            <a className="funderline" href="https://photos.app.goo.gl/osEqMRQajRicLNS5A" target="_blank"><i className="fas fa-images"></i></a>
                        </li>
                        <li>
                            Flown out to FAS&apos;s Command Center and Operating Frac Sites in the Houston (TX) area to research the needs of operators and identify places for improvements for the Cloud Software (August 2019)
                            <span className="content-separator"></span>
                            <a className="funderline" href="https://photos.app.goo.gl/xUjRt96Y8C1HZKSFA" target="_blank"><i className="fas fa-images"></i></a>
                        </li>
                    </ul>
                    <div className="sub-descriptor">
                        <strong>Technologies Used:</strong> Salesforce, Apex Programming Language, VBA, Microsoft Excel, Smartsheets
                    </div>
                </div>
                
            </div>
        </section>
    )
};

export default ExperiencesSection;