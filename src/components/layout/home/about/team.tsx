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
            role: 'Co-Fundadora & CEO',
            image: '/images/team/Maya-Reyes-Ricon.jpg',
            background: 'MSc. Admin. Pública'
        },
        {
            name: 'Luiz Eduardo Ricon',
            role: 'Educação',
            image: '/images/team/Luiz-Eduardo-Ricon.jpg',
            background: 'MSc. Educação'
        },
        {
            name: 'Zander Catta Preta',
            role: 'Produção Editorial',
            image: '/images/team/Zander-Catta-Preta.jpg',
            background: 'A.D. Produção Digital'
        },
        {
            name: 'Karine Ramos',
            role: 'Gerente',
            image: '/images/team/Karine-Ramos.jpeg',
            background: 'Ba. Tech'
        },
        {
            name: 'Alonso Martines',
            role: 'Produção Visual',
            image: '/images/team/Alonso-Martines.jpg',
            background: 'MSc. Educação em Saúde'
        },
        {
            name: 'Pedro Reyes Ricon',
            role: 'Co-Fundador & PM',
            image: '/images/team/Pedro-Reyes-Ricon.jpeg',
            background: 'Ba. RI'
        },
        {
            name: 'Rodrigo Sul',
            role: 'Tech Lead',
            image: '/images/team/Rodrigo-Sul.jpg',
            background: 'Ba. Tech'
        },
        {
            name: 'Felipe Antunes',
            role: 'Back End',
            image: '/images/team/Felipe-Antunes.jpg',
            background: 'Ba. Tech'
        },
        {
            name: 'Fellipe Lorram',
            role: 'Front End',
            image: '/images/team/Fellipe-Lorram.jpg',
            background: 'Ba. Tech'
        },
        {
            name: 'Giulia Marques',
            role: 'Designer Gráfica',
            image: '/images/team/Giulia-Marques.jpeg',
            background: 'Ba. Design Gráfico'
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
                width={240}
                height={240}
                className='rounded-full max-w-[70px] max-h-[70px]'
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
