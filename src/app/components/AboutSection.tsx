import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { BorderRoundness, BorderType } from '../types';
import { links } from '../content';

const AboutSection = () => {
    return (
        <section className='' id='about'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='pb-8 mt-4 lg:mt-0 lg:order-last lg:col-span-4 place-self-center'>
                    <div className='pl-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full relative'>
                        <Image
                            src='/images/hero_image.JPG'
                            alt='JaeYoung Chang Headshot'
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className='text-center lg:text-left lg:col-span-8 justify-self-start place-self-center'>
                    <h2 className='text-4xl font-bold text-blue-400 mb-4'>About Me</h2>
                    <p className='text-center lg:text-left pb-4 text-lg text-slate-200 '>
                        Curious by nature, people-first by heart.
                        <br></br>
                        <br></br>I&apos;m a lifelong learner whose greatest passion is people. I do my best work close
                        to the people using the software. At Apex, that meant working directly with securities lending
                        traders to find friction in their daily workflows. At Epic, it meant shadowing and talking with
                        dermatologists across the country to see how they document patients&apos; skin conditions. From
                        first conversation to launch and beyond, I build with the end user in mind.
                        <br></br>
                        <br></br>Today I&apos;m a senior software engineer and team lead at{' '}
                        <a href='https://apexfintechsolutions.com' target='_blank' className='funderline'>
                            Apex Fintech Solutions
                        </a>{' '}
                        in Chicago, and a 2022{' '}
                        <a href='https://www.nd.edu' target='_blank' className='funderline'>
                            Notre Dame
                        </a>{' '}
                        grad.
                        <br></br>
                        <br></br>I love playing, watching, and talking sports! I&apos;ve been playing soccer, tennis,
                        and golf since I was a kid, and more recently picked up gaelic football and hurling in college.
                        I&apos;m an avid fan of the Detroit Lions, Detroit Red Wings, Korean National Football Team, and
                        all Notre Dame sports. In my free time, I like to{' '}
                        <a
                            href='https://www.goodreads.com/user/show/126699611-jaeyoung-chang'
                            target='_blank'
                            className='funderline'
                        >
                            read
                        </a>
                        , play the guitar, woodwork, and eat delicious foods.
                        <br></br>
                        <br></br>
                        Let&apos;s connect and get to know one another!
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
