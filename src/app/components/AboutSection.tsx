import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { IButtonProps } from '../types';

const links: Array<IButtonProps> = [
    {
        link: "mailto:jaeyoungchang5@gmail.com",
        icon: 'Mail',
        iconClasses: ['invert']
    },
    {
        link: 'https://github.com/jaeyoungchang5',
        icon: 'GitHub',
        target: '_blank'
    },
    {
        link: 'https://www.linkedin.com/in/jaeyoungchang5/',
        icon: 'LinkedIn',
        target: '_blank'
    },
    {
        text: 'Resume',
        link: '/files/resume.pdf',
        icon: 'Download',
        iconClasses: ['invert'],
        target: '_blank'
    }
];

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
                    <h2 className='text-4xl font-bold text-blue-400 mb-4'>About Me</h2>
                    <p className='text-slate-200 text-center lg:text-left pb-4 text-lg'>
                        I am a lifelong learner, driven software developer, and proud Korean. 
                        <br></br><br></br>
                        I am a full-stack engineer at <a href="https://www.epic.com/" target='_blank' className='funderline'>Epic Systems</a>, the nation&apos;s leader in Healthcare Software. 
                        <br></br>
                        I graduated from the <a href="https://www.nd.edu" target='_blank' className='funderline'>University of Notre Dame</a> in 2022 with a BS in Computer Science and a Minor in Engineering Corporate Practice.
                        <br></br><br></br>
                        My greatest passion is people, so let&apos;s connect and get to know one another!
                    </p>
                    <div>
                        {links.map((linkObj, index) => {
                            return (
                                <Button
                                    key={index}
                                    text={linkObj.text}
                                    link={linkObj.link}
                                    target={linkObj.target}
                                    buttonClasses={['pl-1 mr-1.5 mb-3', 'bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800']}
                                    icon={linkObj.icon}
                                    iconClasses={linkObj.iconClasses}
                                    roundedness='rounded-full'

                                />
                            )
                        })}
                    </div>
                </div>
            </div>
		</section>
	);
};

export default AboutSection;