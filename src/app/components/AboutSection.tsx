import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { BorderRoundness, BorderType } from '../types';
import { links } from '../content';

const AboutSection = () => {
	return (
		<section className='' id='about'>
			<div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='pb-8 mt-4 lg:mt-0 lg:order-last lg:col-span-4 place-self-center'>
                    <div className="pl-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full relative">
                        <Image
                            src="/images/hero_image.JPG"
                            alt="JaeYoung Chang Headshot"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className='text-center lg:text-left lg:col-span-8 justify-self-start place-self-center'>
                    <h2 className='text-4xl font-bold text-blue-400 mb-4'>About Me</h2>
                    <p className='text-center lg:text-left pb-4 text-lg text-slate-200 '>
                        I am a lifelong learner, driven software developer, and proud Korean. 
                        <br></br><br></br>
                        I currently live in Madison, Wisconsin working as a full-stack engineer at <a href="https://www.epic.com/" target='_blank' className='funderline'>Epic Systems</a>, the nation&apos;s leader in Healthcare Software. 
                        Before that, I graduated from the <a href="https://www.nd.edu" target='_blank' className='funderline'>University of Notre Dame</a> in 2022 with a BS in Computer Science and a Minor in Engineering Corporate Practice.
                        <br></br><br></br>
                        I love playing, watching, and talking sports! I&apos;ve been playing soccer, tennis, and golf since I was a kid, and more recently picked up gaelic football and hurling in college. 

                        I am an active member of <a href='https://www.madisonhailstones.com' target='_blank' className='funderline'>Madison&apos;s Gaelic Football and Hurling team</a> and <a href='https://twitter.com/FootballClubFC_' target='_blank' className='funderline'>Whiskey FC</a>. I&apos;m an avid fan of the Detroit Lions, Detroit Red Wings, Korean National Football Team, and all Notre Dame sports.

                        In my free time, I like to <a href='https://www.goodreads.com/user/show/126699611-jaeyoung-chang' target='_blank' className='funderline'>read</a>, play the guitar, woodwork, and eat delicious foods. 
                        <br></br><br></br>
                        My greatest passion is people, so let&apos;s connect and get to know one another!
                    </p>
                    <div className='justify-center lg:justify-start flex flex-row flex-wrap'>
                        {links.map((linkObj, index) => {
                            return (
                                <Button
                                    key={index}
                                    text={linkObj.text}
                                    link={linkObj.link}
                                    target={linkObj.target}
                                    border={BorderType.thick}
                                    roundedness={BorderRoundness.full}
                                    icon={linkObj.icon}
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
