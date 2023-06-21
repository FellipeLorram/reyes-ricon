import { BrandFacebook } from '@/assets/svg/brand-facebook';
import { BrandInstagram } from '@/assets/svg/brand-instagram';
import { BrandTwitter } from '@/assets/svg/brand-twitter';
import { MenuIcon } from '@/assets/svg/menu';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import MobileNavbar from './mobileNavbar';
import { LinkedinIcon, X } from 'lucide-react';
import { NavLink } from './navLink';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: 'Serviços' },
        { href: '#about', label: 'Sobre' },
        // { href: '#reviews', label: 'Reviews' },
        // { href: '#why-us', label: 'Porque Nós' },
        { href: '#contact', label: 'Contato' },
        { href: 'http://google.com', label: <LinkedinIcon className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        // { href: 'http://google.com', label: <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        // { href: 'http://google.com', label: <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
    ]

    return (
        <nav className='w-full flex justify-between items-center p-8 md:gap-4 md:flex-row'>

            <div>LOGO</div>

            <div className="md:flex flex-row gap-8 hidden">
                {links.map(({ href, label }) => (
                    <NavLink key={href} href={href}>
                        {label}
                    </NavLink>
                ))}
            </div>
            <div className='md:hidden flex flex-row gap-4'>
                <Link target='_blank' href='https://www.linkedin.com/company/wasidl/about/'>
                    <LinkedinIcon className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>

                {!open ? (
                    <MenuIcon
                        onClick={() => setOpen(true)}
                    />

                ) : (
                    <div 
                        className='flex items-center justify-center bg-opacity-95 bg-white-200 rounded-full w-8 h-8'
                    >
                        <X

                            strokeWidth={2}
                            onClick={() => setOpen(false)}
                        />
                    </div>
                )}
            </div>
            <AnimatePresence>
                {open && (
                    <MobileNavbar 
                        setOpen={setOpen}
                    />
                )}
            </AnimatePresence>
        </nav>
    );
}

