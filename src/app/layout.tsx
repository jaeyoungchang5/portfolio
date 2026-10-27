import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { profile } from '@/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://jaeyoungchang.vercel.app'),
    title: profile.name,
    description: profile.description,
    openGraph: {
        title: profile.name,
        description: profile.description,
        url: '/',
        type: 'profile',
        images: [profile.portrait.src],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
