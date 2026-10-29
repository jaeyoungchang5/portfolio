import React from 'react';
import Image from 'next/image';
import RichText from './RichText';
import SocialLinks from './SocialLinks';
import { profile } from '@/content';

const AboutSection = () => (
    <section id='about'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='pb-8 mt-4 lg:mt-0 lg:order-last lg:col-span-4 place-self-center'>
                <div className='pl-10 w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full relative'>
                    <Image
                        src={profile.portrait.src}
                        alt={profile.portrait.alt}
                        className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
            <div className='text-center lg:text-left lg:col-span-8 justify-self-start place-self-center'>
                <h2 className='text-4xl font-bold text-blue-400 mb-4'>About Me</h2>
                <div className='pb-4 text-lg text-slate-200 space-y-6'>
                    {profile.about.map((paragraph, index) => (
                        <p key={index}>
                            <RichText text={paragraph} />
                        </p>
                    ))}
                </div>
                <SocialLinks />
            </div>
        </div>
    </section>
);

export default AboutSection;
