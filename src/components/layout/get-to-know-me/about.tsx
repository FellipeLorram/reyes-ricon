import React from 'react';
import { Wrapper } from '../wrapper';
import Image from 'next/image';

export default function About() {
    return (
        <Wrapper>
            <div id='about' className='w-full flex flex-col-reverse md:flex-row gap-12 pt-32 pb-32'>
                <div className='w-full md:w-1/2 text-left'>
                    <h1 style={{ lineHeight: 1.3 }} className='text-3xl font-bold mb-6 font-jakarta text-[#1e293b] md:text-5xl'>
                        Sobre nós
                    </h1>
                    <p className='text-gray48 leading-8 text-md md:text-lg md:w-5/6'>
                        Somos um time multidisciplinar altamente qualificado e com a missão de identificar e atender suas necessidades de ensino digital.
                        <br />
                        <br />
                        Sempre atentos às mais recentes inovações nas áreas de tecnologia e de metodologias ativas, propomos soluções integradas, adequadas aos seus objetivos de ensino-aprendizagem engajadores e efetivos.
                        <br />
                        <br />
                        Reunindo as competências de design instrucional, design gráfico e de jogos, produção audiovisual e editorial, gestão e desenvolvimento de produtos digitais, estamos preparados para cuidar de todas as etapas do seu projeto educacional.
                    </p>
                </div>

                <div className='w-full md:w-1/2'>
                    <Image src='/about-us.jpg' alt='' width={600} height={480} priority />
                </div>
            </div>
        </Wrapper>
    )
}
