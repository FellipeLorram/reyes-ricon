import { useAtom } from 'jotai';
import { HeroSVG } from '@/assets/svg/heroSVG'
import Button from '@/components/button/button'
import { Navbar } from '@/components/navigation/navbar'
import { contactModalAtom } from '@/context/contactModal';
import React from 'react'

export function Main() {
    const [, setOnScreen] = useAtom(contactModalAtom);

    return (
        <div style={{
            background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
        }} className='h-screen flex justify-center'>
            <div className='w-full flex flex-col max-w-[1240px]'>
                <Navbar />

                <div className='w-full flex flex-col md:flex-row items-center self-stretch justify-center h-full md:p-8 p-4'>

                    <div className='items-center md:items-start flex flex-col gap-6 md:w-2/3'>
                        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:leading-tight font-jakarta'>Realize seu projeto de Educação Digital!</h1>
                        <p className='text-left md:text-left text-lg md:text-xl '>Venha para a Wasi!<br /> Aqui nós desenvolvemos e produzimos as soluções que você realmente precisa.
                        </p>
                        <Button onClick={() => setOnScreen(true)}>
                            Contate-nos
                        </Button>
                    </div>

                    <HeroSVG className='hidden md:max-w-lg max-w-[240px] md:block mt-8 md:mt-0' />
                </div>
            </div>
        </div>
    )
}
