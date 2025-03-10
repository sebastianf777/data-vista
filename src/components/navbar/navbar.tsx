// app/components/NavBar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // You can adjust the threshold (e.g., 50) to trigger the shrink effect
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
        fixed top-0 left-0 z-50 w-full
        transition-colors duration-300
        ${isScrolled ? 'bg-primary' : 'bg-transparent'}
      `}
        >
            <div
                className={`
          mx-auto flex h-[100px] max-w-7xl items-center justify-between
          px-4 sm:px-6 lg:px-8
          transition-all duration-300
        `}
            >
                {/* LOGO on the left */}
                <div className="flex-shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        // Shrink the logo when scrolled
                        width={isScrolled ? 100 : 210}
                        height={isScrolled ? 70 : 150}
                        className="transition-all duration-300"
                        priority
                    />
                </div>

                {/* NAV LINKS on the right */}
                <ul className="flex items-center space-x-6 text-white text-base">
                    <NavItem href="/" label="Home" />
                    <NavItem href="/users" label="API Users" />
                    <NavItem href="/posts" label="API Posts" />
                    <NavItem href="/countries" label="API Countries" />
                    <NavItem href="/gecko" label="API Gecko" />
                </ul>
            </div>
        </nav>
    );
}

/**
 * Single Nav Item - demonstrates hover/focus styles
 */
function NavItem({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className={`
          transition-colors duration-200
          hover:text-[#2176c4]
          focus:text-[#0659a5]
        `}
            >
                {label}
            </Link>
        </li>
    );
}
