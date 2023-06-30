import React from 'react';
import { Wrapper } from '../wrapper';
import Image from 'next/image';

export  function About() {
    return (
        <Wrapper
            id='about'
        >
            <div id='about' className='w-full flex flex-col-reverse md:flex-row gap-12 pt-32 pb-32'>
                <div className='w-full md:w-1/2 text-left'>
                    <h1 style={{ lineHeight: 1.3 }} className='text-3xl font-bold mb-6 font-jakarta text-[#1e293b] md:text-5xl'>
                        Sobre nós
                    </h1>
                    <p className='text-gray48 leading-8 text-md md:text-lg md:w-5/6'>
                        Somos um time multidisciplinar altamente qualificado com a missão de identificar e atender suas necessidades em Educação Digital.                         <br />
                        <br />
                        A parcela senior do time chega a trabalhar com educação inovadora há 30 anos! Nesse ano um time jovem, 
                        cheio de ideias e conhecimentos novos entrou com tudo nesse embalo e assim nasceu a Wasi, uma empresa de Educação Digital 
                        que une ao mesmo tempo a robustez acadêmica e rapidez de uma StartUp.
                    </p>
                </div>

                <div className='w-full md:w-1/2'>
                    <Image src='/images/team.png' alt='' width={600} height={480} priority />
                </div>
            </div>
        </Wrapper>
    )
}
