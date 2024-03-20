import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg"
import DownloadIcon from "../../../public/download-icon.svg"

const AboutSection = () => {
	return (
		<section className='' id='about'>
			<div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='lg:col-span-4 sm:pb-8 lg:order-last place-self-center mt-4 lg:mt-0'>
                    <div className="rounded-full bg-[#181818] pl-10 w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] relative">
                        <Image
                            src="/images/hero-image.JPG"
                            alt="JaeYoung Chang Headshot"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className='lg:col-span-8 place-self-center text-center lg:text-left justify-self-start'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-slate-200 text-center lg:text-left pb-4 text-base lg:text-lg'>
                        I am a lifelong learner, driven software developer, and proud Korean. 
                        <br></br><br></br>
                        I am a full-stack engineer at <a href="https://www.epic.com/" target='_blank' className='funderline'>Epic Systems</a>, the nation&apos;s leader in Healthcare Software. 
                        <br></br>
                        I graduated from the <a href="https://www.nd.edu" target='_blank' className='funderline'>University of Notre Dame</a> in 2022 with a BS in Computer Science and a Minor in Engineering Corporate Practice.
                        <br></br><br></br>
                        My greatest passion is people, so let&apos;s connect and get to know one another!
                    </p>
                    <div className='contact-links'>
                        <Link
                            href="mailto:jaeyoungchang5@gmail.com"
                            className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                                <Image className="invert self-center w-7 h-7 mr-1" src={MailIcon} alt="Mail Icon" />
                                <p className="self-center">Email Me</p>
                            </span>
                        </Link>
                        <Link
                            href="https://github.com/jaeyoungchang5"
                            target="_blank"
                            className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                                <Image className="self-center w-7 h-7 mr-1" src={GithubIcon} alt="GitHub Icon" />
                                <p className="self-center">GitHub</p>
                            </span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jaeyoungchang5/"
                            target="_blank"
                            className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                                <Image className="self-center w-7 h-7 mr-1" src={LinkedinIcon} alt="LinkedIn Icon" />
                                <p className="self-center">LinkedIn</p>
                            </span>
                        </Link>
                        <Link
                            href="/files/resume.pdf"
                            target="_blank"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
                                <Image className="invert self-center w-7 h-7 mr-1" src={DownloadIcon} alt="Github Icon" />
                                <p className="self-center">Resume</p>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
		</section>
	);
};

export default AboutSection;