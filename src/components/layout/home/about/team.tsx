import { AnimateWrapper } from '@/components/animateWrapper'
import Image from 'next/image'
import React from 'react'

interface TeamCardProps {
    name: string
    role: string
    image: string
    background: string
}

export function Team() {
    const team: TeamCardProps[] = [
        {
            name: 'Maya Reyes Ricon',
            role: 'Fundadora & CEO',
            image: '/avatar.jpg',
            background: 'MSc. Admin. Pública'
        },
        {
            name: 'Luiz Eduardo Ricon',
            role: 'Educação',
            image: '/avatar.jpg',
            background: 'MSc. Educação'
        },
        {
            name: 'Zander Catta Preta',
            role: 'Produção Editorial',
            image: '/avatar.jpg',
            background: 'A.D. Produção Digital'
        },
        {
            name: 'Alonso Martines',
            role: 'Produção Visual',
            image: '/avatar.jpg',
            background: 'MSc. Educação em Saúde'
        },
        {
            name: 'Pedro Reyes Ricon',
            role: 'Fundador & PM',
            image: '/avatar.jpg',
            background: 'Ba. RI'
        },
        {
            name: 'Rodrigo Sul',
            role: 'Tech Lead',
            image: '/avatar.jpg',
            background: 'Ba. Tech'
        },
        {
            name: 'Felipe Antunes',
            role: 'Back End',
            image: '/avatar.jpg',
            background: 'Ba. Tech'
        },
        {
            name: 'Fellipe Lorram',
            role: 'Front End',
            image: '/avatar.jpg',
            background: 'Ba. Tech'
        },
    ]

    return (
        <div className='grid grid-cols-2 grid-flow-row gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {team.map((member, index) => (
                <AnimateWrapper
                    key={index}
                    className='flex justify-center items-center'
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 0
                        },
                        visible: {
                            opacity: 1,
                            scale: 1
                        }
                    }}
                    transition={{
                        delay: 0.5 + (index * 0.1),
                        duration: 0.3
                    }}
                >
                    <TeamCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        background={member.background}
                    />
                </AnimateWrapper>
            ))}
        </div>
    )
}

function TeamCard({ name, role, image, background }: TeamCardProps) {
    return (
        <div className='flex flex-col gap-4 w-full items-center'>
            <Image
                src={image}
                alt=''
                width={360}
                height={360}
                className='rounded-full max-w-[100px]'
            />
            <div className='flex flex-col gap-2 text-center'>
                <h1 className='text-sm font-bold font-jakarta text-[#1e293b]'>
                    {name}
                </h1>
                <h2 className='text-gray48 text-sm'>
                    {role}
                </h2>
                <h2 className='text-gray48 text-xs'>
                    {background}
                </h2>
            </div>
        </div>
    )
}
