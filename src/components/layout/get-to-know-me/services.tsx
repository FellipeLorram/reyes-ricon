import { Blog } from '@/assets/svg/blog';
import { Bulding } from '@/assets/svg/bulding';
import { Portifolio } from '@/assets/svg/portifolio';
import { ShoppingBag } from '@/assets/svg/shopping-bag';
import React from 'react'
import { Wrapper } from '../wrapper';

export function Services() {
    const services = [
        {
            icon: <Bulding />,
            title: 'Some...',
            description: 'Lorem ipsum dolor sit amet consectetur. Quisquam, quod.'
        },
        {
            icon: <Portifolio />,
            title: 'Web Text',
            description: 'Lorem ipsum dolor sit amet consectetur. Quisquam, quod.'
        },
        {
            icon: <Blog />,
            title: 'Some Text',
            description: 'Lorem ipsum dolor sit amet consectetur. Quisquam, quod.'
        },
        {
            icon: <ShoppingBag />,
            title: 'Text Development',
            description: 'Lorem ipsum dolor sit amet consectetur. Quisquam, quod.'
        },
    ]

    return (
        <Wrapper>
            <div id='services' className='flex flex-col items-center gap-8 md:gap-4 bg-white-100 pb-8 pt-20 md:flex-row'>
                {services.map(({ icon, title, description }) => (
                    <Card key={title} icon={icon} title={title} description={description} />
                ))}
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
