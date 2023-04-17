import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={`rounded-md font-semibold p-4 max-w-lg justify-center bg-red-600 hover:bg-amber-400 ease-in-out duration-200 text-lg ${className}`}
            {...props}>
            {children}
        </button>
    )
}
