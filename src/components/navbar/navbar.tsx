'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/users', label: 'API Users' },
        { href: '/posts', label: 'API Posts' },
        { href: '/countries', label: 'API Countries' },
        { href: '/coingecko', label: 'API Gecko' },
    ];

    return (
      <nav
        className={`
        fixed top-0 left-0 z-50 w-screen transition-colors duration-300 
        ${isScrolled ? 'bg-primary' : 'bg-transparent'}
      `}
      >
          <div className={'mx-auto flex h-[100px] w-full items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300'}>
              <div className={'flex-shrink-0'}>
                  <Link href={'/'}>
                      <Image
                        src={'/logo.png'}
                        alt={'Logo'}
                        width={210}
                        height={150}
                        className={'transition-all duration-300 w-36 xl:w-36'}
                        priority
                      />
                  </Link>
              </div>

              <ul className={'hidden md:flex items-center space-x-6 text-white text-base mr-12'}>
                  {navItems.map((item) => (
                    <NavItem key={item.href} href={item.href} label={item.label} currentPath={pathname} />
                  ))}
              </ul>

              <button
                className={'md:hidden text-white mr-3'}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                  {isMenuOpen ? <HiX className={'w-11 h-11'} /> : <HiMenu className={'w-11 h-11'} />}
              </button>
          </div>

          {isMenuOpen && (
            <div className={'md:hidden bg-primary transition-all duration-300'}>
                <ul className={'flex flex-col items-start space-y-4 py-4 pl-12 text-white'}>
                    {navItems.map((item) => (
                      <NavItem key={item.href} href={item.href} label={item.label} onClick={() => setIsMenuOpen(false)} currentPath={pathname} />
                    ))}
                </ul>
            </div>
          )}
      </nav>
    );
}

function NavItem({ href, label, onClick, currentPath }: { href: string; label: string; onClick?: () => void; currentPath: string }) {
    // Determine if this link is active by comparing the current path to the link's href
    const isActive = currentPath === href;

    return (
      <li>
          <Link
            href={href}
            onClick={onClick}
            aria-current={isActive ? 'page' : undefined}
            className={`transition-colors duration-200 ${
              isActive ? 'text-secondary' : 'hover:text-hover-primary focus:text-[#0659a5]'
            }`}
          >
              {label}
          </Link>
      </li>
    );
}
