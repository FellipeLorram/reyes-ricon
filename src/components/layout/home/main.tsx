import { HeroSVG } from '@/assets/svg/heroSVG'
import { AnimateWrapper } from '@/components/animateWrapper'
import Button from '@/components/button/button'
import { Navbar } from '@/components/navigation/navbar'
import Link from 'next/link'
import React from 'react'

export function Main() {
    return (
        <div style={{
            background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
        }} className='h-screen flex justify-center'>
            <div className='w-full flex flex-col max-w-[1240px]'>
                <AnimateWrapper
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -75
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                >
                    <Navbar />
                </AnimateWrapper>
                <AnimateWrapper
                    className='flex flex-col justify-center items-center h-full'
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
                    <div className='w-full flex flex-col md:flex-row items-center self-stretch justify-center h-full md:p-8 p-4'>

                        <div className='items-center md:items-start flex flex-col gap-6 md:w-2/3'>
                            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:leading-tight font-jakarta'>Dê seu próximo passo em educação digital!</h1>
                            <p className='text-left md:text-left text-lg md:text-xl '>Venha para a Wasi!<br /> Aqui nós desenvolvemos e produzimos as soluções que você realmente precisa.
                            </p>
                            <Link href='/#contact'>
                                <Button>
                                    Contate-nos
                                </Button>
                            </Link>
                        </div>

                        <HeroSVG className='hidden md:max-w-lg max-w-[240px] md:block mt-8 md:mt-0' />
                    </div>
                </AnimateWrapper>
            </div>
        </div>
    )
}
