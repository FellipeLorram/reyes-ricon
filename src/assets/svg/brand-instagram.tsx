import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function BrandInstagram({ className }: Props) {
    return (
        <svg
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
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <rect width="16"  height="16" x="4" y="4" rx="4"></rect>
            <circle cx="12"  cy="12" r="3"></circle>
            <path d="M16.5 7.5L16.5 7.501"></path>
        </svg>
    )
}
