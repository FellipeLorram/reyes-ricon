import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { Wrapper } from '../../wrapper'
import Button from '@/components/button/button'
import { contactModalAtom } from '@/context/contactModal';

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
            <div className='w-full text-left'>
                <h1 className='text-4xl font-semibold font-jakarta md:text-6xl'>
                    Descubra seu potencial
                </h1>

                <Button
                    onClick={() => setOnScreen(true)}
                    className='mt-12'
                >
                    Contate-nos
                </Button>
            </div>
        </Wrapper>
    )
}
