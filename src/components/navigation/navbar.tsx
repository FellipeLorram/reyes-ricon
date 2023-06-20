import { BrandFacebook } from '@/assets/svg/brand-facebook';
import { BrandInstagram } from '@/assets/svg/brand-instagram';
import { BrandTwitter } from '@/assets/svg/brand-twitter';
import { MenuIcon } from '@/assets/svg/menu';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import MobileNavbar from './mobileNavbar';
import { X } from 'lucide-react';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: 'Serviços' },
        { href: '#about', label: 'Sobre' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#why-us', label: 'Porque Nós' },
        { href: '#contact', label: 'Contato' },
        { href: 'http://google.com', label: <BrandInstagram className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        { href: 'http://google.com', label: <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        { href: 'http://google.com', label: <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
    ]

    return (
        <nav className='w-full flex justify-between items-center p-8 md:gap-4 md:flex-row'>

            <div>LOGO</div>

            <div className="md:flex flex-row gap-8 hidden">
                <NavLink href='#home' main>Home</NavLink>
                {links.map(({ href, label }) => (
                    <NavLink key={href} href={href}>
                        {label}
                    </NavLink>
                ))}
            </div>
            <div className='md:hidden flex flex-row gap-4'>
                <Link href='/contact'>
                    <BrandInstagram className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>
                <Link href='/contact'>
                    <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>
                <Link href='/contact'>
                    <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>
                {!open ? (
                    <MenuIcon
                        onClick={() => setOpen(true)}
                    />

                ) : (
                    <X  
                        strokeWidth={1}
                        onClick={() => setOpen(false)}
                    />
                )}
            </div>
            <AnimatePresence>
                {open && (
                    <MobileNavbar />
                )}
            </AnimatePresence>
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    main?: boolean;
}

function NavLink({ href, children, main }: NavLinkProps) {
    return (
        <Link
            scroll={false}
            href={href}
            className={`md:text-base hover:text-white-100 ease-in-out duration-200 ${main ? 'text-white-100' : 'text-white-200'}`}
        >
            {children}
        </Link>
    )
}
