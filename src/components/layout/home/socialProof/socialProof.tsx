import React from 'react'
import Image from 'next/image'
import { Wrapper } from '../../wrapper'
import { motion } from 'framer-motion'

const images = [
    { src: '/images/logos/logo-ediouro.png', width: 91, height: 1016, alt: '' },
    { src: '/images/logos/logo-fgv.png', width: 91, height: 4096, alt: '' },
    { src: '/images/logos/logo-ismb.png', width: 91, height: 125, alt: '' },
    { src: '/images/logos/logo-santillana.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-fgvprojetos.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-incentivehouse.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-paperx.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-rioonibus.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-ftdtrans.png', width: 91, height: 1204, alt: '' },
    { src: '/images/logos/logo-moderna-rodape.png', width: 91, height: 43, alt: '' },
    { src: '/images/logos/logo-richmod.png', width: 91, height: 36, alt: '' },
    { src: '/images/logos/logo-robertomarinho.png', width: 91, height: 299, alt: '' },
    { src: '/images/logos/logo-sabesp.png', width: 91, height: 348, alt: '' },
    { src: '/images/logos/logo-topo.png', width: 91, height: 110, alt: '' },
    { src: '/images/logos/logo-tse.png', width: 91, height: 4027, alt: '' },
    { src: '/images/logos/logo-ediouro.png', width: 91, height: 1016, alt: '' },
    { src: '/images/logos/logo-fgv.png', width: 91, height: 4096, alt: '' },
    { src: '/images/logos/logo-ismb.png', width: 91, height: 125, alt: '' },
    { src: '/images/logos/logo-santillana.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-fgvprojetos.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-incentivehouse.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-paperx.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-rioonibus.png', width: 91, height: 60, alt: '' },
    { src: '/images/logos/logo-ftdtrans.png', width: 91, height: 1204, alt: '' },
    { src: '/images/logos/logo-moderna-rodape.png', width: 91, height: 43, alt: '' },
    { src: '/images/logos/logo-richmod.png', width: 91, height: 36, alt: '' },
    { src: '/images/logos/logo-robertomarinho.png', width: 91, height: 299, alt: '' },
    { src: '/images/logos/logo-sabesp.png', width: 91, height: 348, alt: '' },
    { src: '/images/logos/logo-topo.png', width: 91, height: 110, alt: '' },
    { src: '/images/logos/logo-tse.png', width: 91, height: 4027, alt: '' },
]

export function SocialProof() {
    return (
        <Wrapper
            id='reviews'
            style={{
                background: 'linear-gradient(90deg, rgba(230,219,255,1) 0%, #d4c2ff 80%)'
            }}
            className='bg-violet-500/10 py-14 md:py-28 overflow-hidden'
        >
            <div className='w-full flex flex-col gap-8 items-start justify-center '>
                <h1 style={{ lineHeight: 1.3 }} className='text-3xl font-bold mb-6 font-jakarta text-[#1e293b] md:text-4xl'>
                    Parceiros que já confiaram<br /> nos nossos profissionais
                </h1>
                <motion.div
                    initial={{ transform: 'translateX(0)' }}
                    animate={{ transform: 'translateX(-180%)' }}
                    transition={{ duration: 30, repeat: Infinity, }}
                    className='w-full grid grid-rows-1 gap-2 grid-flow-col'
                >
                    {images.map(({
                        src,
                        width,
                        height,
                        alt
                    }, index) => (
                        <div key={index * 10} className='w-full bg-white-100 p-10 flex items-center justify-center rounded-xl h-32 md:h-40'>
                            <Image
                                className='max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] object-contain'
                                src={src}
                                width={width}
                                height={height}
                                alt={alt}
                            />
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ transform: 'translateX(0)' }}
                    animate={{ transform: 'translateX(-180%)' }}
                    transition={{ duration: 28, repeat: Infinity, }}
                    className='md:hidden w-full grid grid-rows-1 gap-2 grid-flow-col'
                >
                    {images.reverse().map(({
                        src,
                        width,
                        height,
                        alt
                    }, index) => (
                        <div key={index * 10} className='w-full bg-white-100 p-10 flex items-center justify-center rounded-xl h-32 md:h-40'>
                            <Image
                                className='max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] object-contain'
                                src={src}
                                width={width}
                                height={height}
                                alt={alt}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </Wrapper>
    )
}

