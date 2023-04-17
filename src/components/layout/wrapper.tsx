import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;
}

export function Wrapper({ children, className, ...props }: Props) {
    return (
        <div {...props} className={`flex items-center justify-center ${className}`}>
            <div className='w-11/12 max-w-[1240px]'>
                {children}
            </div>
        </div>
    )
}
