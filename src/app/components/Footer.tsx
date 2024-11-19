import React from 'react';

const Footer = () => {
    return (
        <footer className='footer flex z-10 justify-center text-slate-400 container pt-12'>
            <p>@ {new Date().getFullYear()} JaeYoung Chang. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
