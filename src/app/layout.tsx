import type { Metadata } from 'next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import { themeInitScript } from '@/components/layout/theme';
import { profile } from '@/content';

const serif = Newsreader({ subsets: ['latin'], axes: ['opsz'], variable: '--font-serif' });
const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans' });

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
        // suppressHydrationWarning: themeInitScript adds `dark` to <html> before React hydrates.
        <html lang='en' className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
            <head>
                {/* A fixed string from our own code, not content, so injecting it is safe. */}
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>{children}</body>
        </html>
    );
}
