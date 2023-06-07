import React from 'react';
import { motion } from 'framer-motion';

export default function MobileNavbar() {
    return (
        <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.2, bounce: 0 }}
            className='bg-white-100 h-screen w-4/5 fixed left-0 top-0 z-50'
        >

        </motion.div>
    )
}
