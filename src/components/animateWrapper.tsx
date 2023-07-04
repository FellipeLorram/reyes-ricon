import { useInView, useAnimation, motion, Variants, Transition } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimateWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variants: Variants;
    transition?: Transition;
}

export function AnimateWrapper({
    children,
    variants,
    transition,
    ...props
}: AnimateWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div
            {...props}
            ref={ref}
            className={`overflow-hidden ${props.className}`}
        >
            <motion.div
                className='w-full'
                variants={variants}
                initial='hidden'
                animate={controls}
                transition={
                    transition || { duration: 0.3, delay: 0.25, ease: 'easeInOut' }
                }
            >
                {children}
            </motion.div>
        </div>
    )
}
