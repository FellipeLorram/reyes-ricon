import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface Props {
    onScreen: boolean;
    setOnScreen: (value: boolean) => void;
}

export function ContactModal({ onScreen, setOnScreen }: Props) {
    return (
        <AnimatePresence>
            {onScreen && (
                <motion.div
                    onClick={() => setOnScreen(false)}
                    variants={backDrop}
                    className='bg-violet-900/50 w-full flex items-center justify-center fixed h-screen top-0 left-0 z-50'
                    initial='hidden'
                    animate='visible'
                    exit='exit'

                >
                    <motion.div
                        variants={modalVariants}
                        className='w-full max-w-2xl bg-white-100 rounded-lg shadow-lg p-10 '
                    >
                        <h1 className='text-2xl font-semibold font-jakarta text-gray48 text-center'>
                            Get a professional website today!
                        </h1>
                         
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
