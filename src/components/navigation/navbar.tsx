import { BrandFacebook } from '@/assets/svg/brand-facebook';
import { BrandInstagram } from '@/assets/svg/brand-instagram';
import { BrandTwitter } from '@/assets/svg/brand-twitter';
import { MenuIcon } from '@/assets/svg/menu';
import Link from 'next/link'
import React, { useState } from 'react'

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '#services', label: 'Serviços' },
        { href: '#about', label: 'Sobre' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#whyus', label: 'Porque Eu' },
        { href: '#contact', label: 'Contato' },
        { href: '/instagram', label: <BrandInstagram className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        { href: '/facebook', label: <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        { href: '/twitter', label: <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
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
            <MenuIcon className='md:hidden' />
            {open && (
                <></>
            )}
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
            href={href}
            className={`md:text-lg hover:text-white-100 ease-in-out duration-200 ${main ? 'text-white-100' : 'text-white-200'}`}
        >
            {children}
        </Link>
    )
}
