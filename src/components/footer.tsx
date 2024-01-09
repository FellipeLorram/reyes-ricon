import { LinkedinIcon, MailIcon, Smartphone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { AnimateWrapper } from './animateWrapper'

export function Footer() {
    return (
        <AnimateWrapper
            className='flex flex-col items-center justify-center w-full bg-purple-950'
            variants={{
                hidden: {
                    opacity: 0,
                    y: 75
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            }}
        >
            <div className='flex flex-col md:flex-row gap-6 items-center justify-center w-full py-6'>
                <div className='flex flex-row gap-2 items-center'>
                    <MailIcon size={24} />
                    <Link href='mailto:contato@wasidl.com.br'>
                        contato@wasidl.com.br
                    </Link>
                </div>
                {/* <div className='flex flex-row gap-2 items-center'>
                    <Smartphone size={24} />
                    <Link href='https://wa.me/+5521976869119'>
                        +55 (21)97686-9119
                    </Link>
                </div> */}
                <div className='flex flex-row gap-2 items-center'>
                    <LinkedinIcon size={24} />
                    <Link target="_blank" href='https://www.linkedin.com/company/wasidl/about/'>
                        Wasi Educação Digital
                    </Link>
                </div>
            </div>
        </AnimateWrapper>
    )
}
