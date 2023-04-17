import React from 'react';
import { Wrapper } from '../wrapper';
import Image from 'next/image';

export default function About() {
    return (
        <Wrapper>
            <div id='about' className='w-full flex flex-col-reverse md:flex-row gap-12 pt-32 pb-32'>
                <div className='w-full md:w-1/2 text-left'>
                    <h1 style={{ lineHeight: 1.3 }} className='text-3xl font-bold mb-6 font-jakarta text-[#1e293b] md:text-5xl'>
                        We help teams<br /> build the business<br /> of their dreams
                    </h1>
                    <p className='text-gray48 leading-8 text-md md:text-lg md:w-5/6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                        fuga qui aliquam dolor emque, voluptatibus quibusdam
                        <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Amet fuga qui aliquam doloremque, voluptatibus quibusdam
                        eligendi ducimus doloribus nobis eius expedita laudantium voluptas
                        consequuntur. Laudantium excepturi inventore neque deleniti debitis.
                    </p>
                </div>

                <div className='w-full md:w-1/2'>
                    <Image src='/about-us.jpg' alt='' width={600} height={480} priority />
                </div>
            </div>
        </Wrapper>
    )
}
