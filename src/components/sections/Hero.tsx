import React from 'react';
import Image from 'next/image';
import ButtonLink from '@/components/ui/ButtonLink';
import RichText from '@/components/ui/RichText';
import SocialButton from '@/components/ui/SocialButton';
import { linkOf, profile } from '@/content';

/** Phones: portrait centered above the text. From `md` up: text left, portrait right. */
const Hero = () => (
    <section
        id='top'
        className='flex flex-col-reverse items-center gap-10 pb-16 pt-10 md:flex-row md:gap-14 md:pb-[88px] md:pt-24'
    >
        <div className='w-full min-w-0 md:flex-1'>
            <h1 className='font-serif text-display-sm font-normal leading-[1.08] tracking-[-0.01em] md:text-display'>
                {profile.headline}
            </h1>
            <p className='mt-6 max-w-lede text-lg text-body md:mt-7 md:text-lede'>
                <RichText text={profile.lede} />
            </p>
            {/* Phones: email full width, GitHub and LinkedIn side by side below it. */}
            <div className='mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:mt-9'>
                <ButtonLink href={linkOf('email').href} variant='primary' className='col-span-2'>
                    {linkOf('email').label}
                </ButtonLink>
                <SocialButton kind='github' />
                <SocialButton kind='linkedin' />
            </div>
        </div>
        <Image
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            width={1000}
            height={960}
            sizes='(min-width: 768px) 300px, 208px'
            priority
            className='aspect-square w-52 shrink-0 rounded-full object-cover md:w-[300px]'
        />
    </section>
);

export default Hero;
