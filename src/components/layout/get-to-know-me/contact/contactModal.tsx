import React from 'react';
import { useAtom } from 'jotai';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactForm } from '@/components/form/contact';
import { contactModalAtom } from '@/context/contactModal';

const backDrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { scale: 0 },
    visible: {
        x: 0,
        scale: 1,
        transition: {
            duration: 0.1,
            delay: 0.1,
        },
    },
    exit: { scale: 0 },
};

export function ContactModal() {
    const [onScreen, setOnScreen] = useAtom(contactModalAtom);
    return (
        <AnimatePresence>
            {onScreen && (
                <motion.div
                    onClick={() => setOnScreen(false)}
                    variants={backDrop}
                    className='cursor-pointer bg-violet-900/50 w-full flex items-center justify-center fixed h-screen top-0 left-0 z-40'
                    initial='hidden'
                    animate='visible'
                    exit='exit'

                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        variants={modalVariants}
                        className='w-full max-w-2xl bg-white-100 rounded-lg shadow-lg p-10 z-50'
                    >
                        <h1 className='text-2xl font-semibold font-jakarta text-gray48 text-center mb-4'>
                            Realize seu Projeto!
                        </h1>
                        <ContactForm />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
