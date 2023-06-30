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
import Image from 'next/image';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: 'Produto' },
        { href: '#about', label: 'Sobre' },
        // { href: '#reviews', label: 'Reviews' },
        // { href: '#why-us', label: 'Porque Nós' },
        { href: '#contact', label: 'Contato' },
        // { href: 'http://google.com', label: <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        // { href: 'http://google.com', label: <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
    ]

    return (
        <nav className='w-full flex justify-between items-center p-4 md:gap-4 md:flex-row'>

            <Link
                href='/'
            >
                <Image
                    src='/images/logo-wasi.png'
                    alt='WASI Desenvolvimento'
                    width={100}
                    height={20}
                />
            </Link>

            <div className="md:flex flex-row gap-8 hidden">
                {links.map(({ href, label }) => (
                    <NavLink key={href} href={href}>
                        {label}
                    </NavLink>
                ))}
                <Link target='_blank' href='https://www.linkedin.com/company/wasidl/about/'>
                    <LinkedinIcon className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>
            </div>
            <div className='md:hidden flex flex-row gap-4'>

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

