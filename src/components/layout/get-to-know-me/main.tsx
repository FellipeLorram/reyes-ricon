import {HeroSVG} from '@/assets/svg/heroSVG'
import Button from '@/components/button/button'
import { Navbar } from '@/components/navigation/navbar'
import React from 'react'

export function Main() {
    return (
        <div style={{
            background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
        }} className='h-screen flex justify-center'>
            <div className='w-full flex flex-col max-w-[1240px]'>
                <Navbar />

                <div className='w-full flex flex-col md:flex-row items-center self-stretch justify-center h-full md:p-8 p-2'>

                    <div className='items-center md:items-start flex flex-col gap-8 md:w-2/3'>
                        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold font-jakarta'>Your Idea Matters!</h1>
                        <p className='text-center md:text-left sm:text-lg md:text-xl leading-8'>Pulvinar enim ac
                            tortor nulla facilisi tristique facilisi <br className='hidden md:block' />
                            elementum sollicitudin eget lorem.</p>
                        <Button>
                            Something nice
                        </Button>
                    </div>

                    <HeroSVG className='md:max-w-lg max-w-[240px] md:block mt-8 md:mt-0' />
                </div>
            </div>
        </div>
    )
}
