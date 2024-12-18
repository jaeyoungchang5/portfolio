'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='py-4 lg:py-8 lg:mb-4' id='hero'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='place-self-center text-center lg:text-left justify-self-start'
            >
                <h1 className='text-white text-6xl lg:text-8xl md:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700'>
                        Hey, I&apos;m{' '}
                    </span>
                    <TypeAnimation sequence={['JaeYoung', 2000]} wrapper='span' speed={50} />
                </h1>
            </motion.div>
        </section>
    );
};

export default HeroSection;
