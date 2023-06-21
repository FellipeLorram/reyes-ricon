import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from './navLink';
import Link from 'next/link';

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavbar({ setOpen }: Props) {
    const links = [
        { href: '#services', label: 'Serviços' },
        { href: '#about', label: 'Sobre' },
        { href: '#contact', label: 'Contato' },
        // { href: 'http://google.com', label: <BrandInstagram className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        // { href: 'http://google.com', label: <BrandTwitter className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
        // { href: 'http://google.com', label: <BrandFacebook className='w-xs ease-in-out duration-200 stroke-white-200 hover:stroke-white-100' /> },
    ]
    return (
        <motion.div
            onClick={() => setOpen(false)}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.2, bounce: 0 }}
            className='bg-white-100 h-screen w-4/5 fixed left-0 top-0 z-50 rounded-tr-xl rounded-br-xl shadow-2xl'
        >
            <div className='h-screen relative'>

                <div className='absolute top-8 left-8'>

                    <Link href='/'>
                        <p className='text-black text-3xl '>
                            LOGO
                        </p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-start h-full gap-8 pl-8'>
                    {links.map(({ href, label }) => (
                        <NavLink
                            key={href}
                            href={href}
                        >
                            <p className='text-black text-2xl'>
                                {label}
                            </p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
