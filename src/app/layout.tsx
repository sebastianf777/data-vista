import {ReactNode} from 'react';
import '@/styles/globals.css';
import {Montserrat} from 'next/font/google';
import NavBar from '@/components/navbar/navbar';

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
