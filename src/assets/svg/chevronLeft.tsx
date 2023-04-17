import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function ChevronLeft({ className, ...props }: Props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            stopColor="1.5"
            className={className}
            viewBox="0 0 24 24"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
        </svg>
    )
}
