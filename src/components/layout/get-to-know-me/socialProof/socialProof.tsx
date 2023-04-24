import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Wrapper } from '../../wrapper'

const images = [
    { src: '/images/logo-ediouro.png', width: 91, height: 1016, alt: '' },
    { src: '/images/logo-fgv.png', width: 91, height: 4096, alt: '' },
    { src: '/images/logo-ismb.png', width: 91, height: 125, alt: '' },
    { src: '/images/logo-santillana.png', width: 91, height: 60, alt: '' },
    { src: '/images/logo-descomplica.png', width: 91, height: 346, alt: '' },
    { src: '/images/logo-ftdtrans.png', width: 91, height: 1204, alt: '' },
    { src: '/images/logo-moderna-rodape.png', width: 91, height: 43, alt: '' },
    { src: '/images/logo-richmod.png', width: 91, height: 36, alt: '' },
    { src: '/images/logo-robertomarinho.png', width: 91, height: 299, alt: '' },
    { src: '/images/logo-sabesp.png', width: 91, height: 348, alt: '' },
    { src: '/images/logo-topo.png', width: 91, height: 110, alt: '' },
    { src: '/images/logo-tse.png', width: 91, height: 4027, alt: '' },
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
            <div className='w-full flex flex-col gap-4 items-start justify-center '>
                <h1 className='text-4xl font-jakarta text-[#1e293b] font-medium mb-8'>
                    Parceiros
                </h1>
                <div className='w-full gap-1 flex items-center justify-center scrollLeftAnimation'>
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
                </div>
                <div
                    className='w-full gap-1 flex items-center justify-center scrollLeftAnimation md:hidden'
                >
                    {images.sort((a, b) => {
                        return a.src.length - b.src.length
                    }).map(({
                        src,
                        width,
                        height,
                        alt
                    }) => (
                        <div key={src} className='w-full bg-white-100 p-10 flex items-center justify-center rounded-xl h-32 md:h-40'>
                            <Image
                                className='max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] object-contain'
                                
                                src={src}
                                width={width}
                                height={height}
                                alt={alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

