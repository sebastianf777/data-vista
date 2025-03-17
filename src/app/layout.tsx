import {ReactNode} from 'react';
import '@/styles/globals.css';
import {Montserrat} from 'next/font/google';
import NavBar from '@/components/navbar/navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Data Vista Project',
    default: 'Data Vista Project',
  },
  description: 'Data Vista Project Exercise made with NextJS by Sebastian Fontana',
  metadataBase: new URL('https://data-vista-ochre.vercel.app'),
};
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
});

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={montserrat.className}>
            <body>
                <main>
                    <NavBar/>
                    {children}
                </main>
            </body>
        </html>
    );
}
