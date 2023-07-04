import { MenuIcon } from '@/assets/svg/menu';
import Link from 'next/link'
import React, { useState } from 'react'
import { LinkedinIcon, X } from 'lucide-react';
import { NavLink } from './navLink';
import Image from 'next/image';

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: 'Produto' },
        { href: '#about', label: 'Sobre' },
        { href: '#contact', label: 'Contato' },
    ]

    return (
        <nav className='w-full flex flex-col justify-center items-center p-4 md:justify-between gap-4 md:flex-row'>

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

            <div className="flex flex-row gap-8">
                {links.map(({ href, label }) => (
                    <NavLink key={href} href={href}>
                        {label}
                    </NavLink>
                ))}
                <Link target='_blank' href='https://www.linkedin.com/company/wasidl/about/'>
                    <LinkedinIcon className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' />
                </Link>
            </div>

        </nav>
    );
}

