import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

export interface CardProps extends MotionProps {
    image: string;
    testimony: string;
    name: string;
    className?: string;
}

export function Card({ image, testimony, name, className, ...props }: CardProps) {
    return (
        <motion.div
            {...props}
            className={`${className} flex flex-col bg-white-100 items-start justify-between gap-6 p-6 rounded-md hover:shadow-lg hover:scale-105 shadow-indigo-500/40 cursor-pointer border hover:border-violet-500 ease-in-out duration-200`}>
            <Image src={image} alt='' width={64} height={64} className='rounded-full' />
            <p className='text-gray48 text-md text-left'>{testimony}</p>
            <h2 className='text-zinc-900 font-semibold'>{name}</h2>
        </motion.div>
    )
}