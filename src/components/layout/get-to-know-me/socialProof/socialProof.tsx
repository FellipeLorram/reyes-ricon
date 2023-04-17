import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Wrapper } from '../../wrapper'
import { Card, CardProps } from './card'
import { ChevronLeft } from '@/assets/svg/chevronLeft';
import { ChevronRight } from '@/assets/svg/chevronRight';

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1500 : -1500,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1500 : -1500,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export function SocialProof() {
    const [[page, direction], setPage] = useState([0, 0]);
    const cardIndex = wrap(0, 3, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const testimonials: CardProps[] = [
        {
            image: '/avatar.jpg',
            testimony: '"Trabalhar com [nome do profissional] foi uma experiência incrível! Desde o início, ele foi muito atencioso e fez questão de entender minhas necessidades e objetivos. O resultado final foi um trabalho excepcional, que superou minhas expectativas. Recomendo [nome do profissional] sem hesitação para quem busca um trabalho de qualidade e um profissional comprometido."',
            name: 'John Doe'
        },
        {
            image: '/avatar.jpg',
            testimony: '"Eu tive o prazer de trabalhar com [nome do profissional] em um projeto recente e fiquei muito impressionado com sua habilidade e expertise. Ele trouxe uma perspectiva única para o projeto e seu trabalho foi essencial para alcançarmos nossos objetivos. Além disso, ele foi extremamente profissional e fácil de trabalhar. Não hesitaria em recomendar [nome do profissional] a qualquer pessoa que precise de um trabalho de qualidade e um parceiro confiável."',
            name: 'John Doesnt'
        },
        {
            image: '/avatar.jpg',
            testimony: '"Eu contratei [nome do profissional] para criar meu novo site e fiquei muito feliz com o resultado. Ele foi capaz de traduzir minhas ideias em um design elegante e funcional, que refletia perfeitamente a identidade da minha marca. Além disso, ele foi muito ágil em responder minhas dúvidas e fazer ajustes conforme necessário. Recomendo [nome do profissional] para quem busca um profissional criativo e comprometido."',
            name: 'Joana Doe'
        },
    ]

    return (
        <Wrapper
            style={{
                background: 'linear-gradient(90deg, rgba(230,219,255,1) 0%, #d4c2ff 95%)'
            }}
            className='bg-violet-500/10 md:py-28  overflow-hidden'>
            <div className='hidden w-full md:flex gap-6 flex-row justify-between'>
                {testimonials.map(({ image, testimony, name }) => (
                    <Card key={name} image={image} testimony={`${testimony.split(' ').slice(0, 45).join(' ')}...`} name={name} />
                ))}
            </div>
            <div className='md:hidden flex items-center justify-center w-full relative h-screen'>
                <AnimatePresence initial={false} custom={direction}>
                    <Card
                        className='absolute inset-10 inset-y-20'
                        key={page}
                        image={testimonials[cardIndex].image}
                        testimony={testimonials[cardIndex].testimony.split(' ').slice(0, 45).join(' ') + '...'}
                        name={testimonials[cardIndex].name}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
                <div className='flex w-full justify-between flex-row'>
                    <ChevronLeft className='stroke-zinc-500 w-10 h-10' onClick={() => paginate(1)} />
                    <ChevronRight className='stroke-zinc-500 w-10 h-10' onClick={() => paginate(-1)} />
                </div>
            </div>
        </Wrapper>
    )
}

