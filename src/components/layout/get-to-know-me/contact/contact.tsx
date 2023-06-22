import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { Wrapper } from '../../wrapper'
import Button from '@/components/button/button'
import { contactModalAtom } from '@/context/contactModal';
import { LinkedinIcon, MailIcon, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
    const [, setOnScreen] = useAtom(contactModalAtom);

    return (
        <Wrapper
            id='contact'
            className='py-20 px-10'
            style={{
                background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
            }}
        >
            <div className='w-full flex justify-between flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-start'>
                <div className='text-left sm:w-2/3'>
                    <h1 className='text-4xl font-semibold font-jakarta md:text-6xl'>
                        Descubra seu potencial
                    </h1>

                    <Button
                        onClick={() => setOnScreen(true)}
                        className='mt-8'
                    >
                        Contate-nos
                    </Button>
                </div>

                <div className='flex flex-col gap-4 sm:w-1/3 sm:gap-8'>
                    <div className='flex flex-row gap-4 items-center'>
                        <MailIcon size={24} />
                        <Link href='mailto:contato@wasidl.com.br'>
                            contato@wasidl.com.br
                        </Link>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <Smartphone size={24} />
                        <Link href='https://wa.me/+5521976869119'>
                            +55 (21)97686-9119
                        </Link>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <LinkedinIcon size={24} />
                        <Link href='https://www.linkedin.com/company/wasidl/about/'>
                            Wasi Educação Digital
                        </Link>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}
