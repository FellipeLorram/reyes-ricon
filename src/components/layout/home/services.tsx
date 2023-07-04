import { Projects } from '@/assets/svg/bulding';
import React from 'react'
import { Wrapper } from '../wrapper';
import Image from 'next/image';
import { AnimateWrapper } from '@/components/animateWrapper';

export function Services() {
    const services = [
        {
            icon: <Image
                className='w-12 h-12'
                src='/images/icons/producao.png'
                width={70}
                height={70}
                alt='Icone de BNCC'
            />,
            title: 'Produção de Material Didático',
            description: 'Seja suas vídeoaulas, apresentações, PDFs ou mesmo jogos ou outras mídias que você possa sonhar, conte com a gente para produzir seu Materia Didático Digital'
        },
        {
            icon: <Projects />,
            title: 'Projetos em Educação Digital',
            description: 'Precisa de uma solução, mas não sabe qual? Nós te ajudamos a entender seus desafios e necessidades e desenvolvemos seu projeto da ideação à avaliação.'
        },
        {
            icon: <Image
                className='w-12 h-12'
                src='/images/icons/BNCC.png'
                width={70}
                height={70}
                alt='Icone de BNCC'
            />,
            title: 'Adequação à BNCC',
            description: 'Use seu time de professores para desenvolver Itinerarios Formativos e atividades de alto impacto com o apoio de um time super inovador.'
        },
        {
            icon: <Image
                className='w-12 h-12'
                src='/images/icons/ludologia.png'
                width={70}
                height={70}
                alt='Icone de ludologia'
            />,
            title: 'Ludologia e Gamificação',
            description: 'Adicione mecanismos lúdicos ou transforme em jogo a qualquer processo da sua instituição de ensino para aumentar o engajamento do seu público alvo.'
        },
    ]

    return (
        <Wrapper
            id='services'
        >
            <div id='services' className='flex flex-col items-center justify-center md:items-start gap-8 md:gap-6 bg-white-100 pb-8 pt-20 md:flex-row'>
                {services.map(({ icon, title, description }, i) => (
                    <AnimateWrapper
                        key={title}
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
                        transition={{
                            delay: i * 0.3,
                            duration: 0.3
                        }}
                    >
                        <Card key={title} icon={icon} title={title} description={description} />
                    </AnimateWrapper>
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
        <div className='flex flex-col items-center max-w-xs md:items-start  gap-4 p-4 md:p-2'>
            {icon}
            <h1 className='text-zinc-900 text-xl md:text-xl md:text-left font-jakarta font-semibold text-center'>{title}</h1>
            <p className='text-gray48 text-md text-center md:text-left'>{description}</p>
        </div>
    )
}
