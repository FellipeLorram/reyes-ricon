import React from 'react'
import { Wrapper } from '../wrapper'
import { Professional } from '@/assets/svg/professional';
import { Passionate } from '@/assets/svg/passionate';
import { Support } from '@/assets/svg/support';

export function WhyUs() {
    const cards: CardProps[] = [
        {
            icon: <Passionate />,
            title: 'Passionate',
            description: 'Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.'
        },
        {
            icon: <Professional />,
            title: 'Professional',
            description: 'Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.t'
        },
        {
            icon: <Support />,
            title: 'Support',
            description: 'Tempor ullamcorper urna, est, lectus amet sit tempor pretium mi sed morbi cras posuere sit ultrices bibendum augue sit ornare.'
        },
    ]

    return (
        <Wrapper>
            <div className='w-full flex flex-col gap-4 py-28'>
                <h1>Why Choose Us</h1>

                <div className='flex flex-col items-center md:flex-row justify-between'>
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
