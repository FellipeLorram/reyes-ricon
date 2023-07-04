import { useState } from 'react';
import { Wrapper } from '../wrapper'
import { ContactForm } from '@/components/form/contactForm';
import { ContactSVG } from '@/assets/svg/contactSVG';
import { AnimateWrapper } from '@/components/animateWrapper';
import MessageSVG from '@/assets/svg/messageSVG';
import Button from '@/components/button/button';
import { ContactFormSchema } from '@/lib/schemas/contactFormSchema';

export function Contact() {
    const [formInView, setFormInView] = useState(true);

    async function onSubmit(data: ContactFormSchema) {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.ok) {
            setFormInView(false);
        }
    }

    return (
        <Wrapper
            id='contact'
            className='py-10 md:pt-20 md:px-10'
            style={{
                background: 'linear-gradient(35deg,rgb(6,0,151) 0%,rgb(130,4,255) 73%,rgb(193,15,255) 100%)'
            }}
        >

            <div className='w-full flex justify-between flex-col items-start gap-8'>
                <div className='text-left sm:w-2/3'>
                    <h1 className='text-4xl font-semibold font-jakarta md:text-6xl'>
                        Descubra seu potencial
                    </h1>
                </div>

                {formInView && (

                    <div className='flex flex-row w-full p-4 items-center justify-start'>
                        <AnimateWrapper
                            className='w-full md:w-1/2'
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -75
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0
                                }
                            }}
                        >
                            <ContactForm
                                onSubmit={onSubmit}
                                className='w-full'
                            />
                        </AnimateWrapper>
                        <AnimateWrapper
                            className='w-full md:w-1/2'
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: 75
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0
                                }
                            }}
                        >
                            <ContactSVG
                                className='hidden md:block w-full max-w-[500px] mx-auto'
                            />
                        </AnimateWrapper>
                    </div>
                )}

                {!formInView && (
                    <AnimateWrapper
                        className='w-full'
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
                    >
                        <div className='w-full flex flex-col gap-4 h-80'>
                            <MessageSVG className='w-full h-full' />
                            <h1 className='text-2xl font-semibold font-jakarta text-center'>
                                Obrigado pelo contato!
                            </h1>
                            <p className='text-center'>
                                Em breve entraremos em contato com você.
                            </p>
                            <Button
                                className='w-1/2 mx-auto'
                                onClick={() => setFormInView(true)}
                            >
                                Voltar
                            </Button>
                        </div>
                    </AnimateWrapper>
                )}
            </div>
        </Wrapper>
    )
}
