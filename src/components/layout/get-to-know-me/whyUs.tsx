import React from 'react'
import { Wrapper } from '../wrapper'
import { Professional } from '@/assets/svg/professional';
import { Passionate } from '@/assets/svg/passionate';
import { Support } from '@/assets/svg/support';

export function WhyUs() {
    const cards: CardProps[] = [
        {
            icon: <Passionate />,
            title: 'Inovação',
            description: 'Somos caçadores de inovações na área de tecnologia e educação tanto no mercado quanto na Academia.'
        },
        {
            icon: <Professional />,
            title: 'Pesquisa',
            description: 'Com o nosso time você tem a certeza de contar com todas as competências necessárias para trazer o seu projeto à vida.'
        },
        {
            icon: <Support />,
            title: 'Produção',
            description: `Design Instrucional, Gráfico e de Jogos
            Produção Audiovisual e Editorial
            Ludologia, Pedagogia e Andragogia
            Gestão e desenvolvimento de Produtos Digitais`
        },
    ]

    return (
        <Wrapper
            id='why-us'
        >
            <div className='w-full flex flex-col gap-4 py-28'>
                <h1 style={{ lineHeight: 1.3 }} className='text-3xl font-bold mb-6 font-jakarta text-[#1e293b] md:text-5xl'>
                    Nosso Time
                </h1>
                <div className='flex flex-col items-center md:flex-row md:items-start justify-between'>
                    {cards.map(({ icon, title, description }) => (
                        <Card key={title} icon={icon} title={title} description={description} />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function Card({ icon, title, description }: CardProps) {
    return (
        <div className='flex flex-col items-center max-w-xs md:items-start gap-4 p-4 md:p-0'>
            {icon}
            <h1 className='text-zinc-900 text-xl md:text-2xl font-jakarta font-semibold'>{title}</h1>
            <p className='text-gray48 text-md text-center md:text-left'>{description}</p>
        </div>
    )
}
