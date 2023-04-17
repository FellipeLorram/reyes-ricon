import React, { useState } from 'react'
import { Wrapper } from '../../wrapper'
import Button from '@/components/button/button'
import { ContactModal } from './contactModal'

export function Contact() {
    const [onScreen, setOnScreen] = useState(false);

    return (
        <Wrapper
            className='py-20 px-10'
            style={{
                background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
            }}
        >
            <ContactModal
                onScreen={onScreen}
                setOnScreen={setOnScreen}
            />
            <div className='w-full text-center'>
                <h1 className='text-4xl font-semibold font-jakarta md:text-6xl'>
                    Get a professional <br /> website today!
                </h1>

                <Button
                    onClick={() => setOnScreen(true)}
                    className='mt-12'
                >
                    Contact Us
                </Button>
            </div>
        </Wrapper>
    )
}
