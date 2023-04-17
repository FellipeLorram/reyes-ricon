import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function ShoppingBag({ className }: Props) {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 22V14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14V22M10 18H38L40 42H8L10 18Z" stroke="url(#paint0_radial_128_652)" stopColor="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="16" r="16" fill="#5F06DE" fillOpacity="0.16" />
            <defs>
                <radialGradient id="paint0_radial_128_652" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.53333 42) rotate(-48.0934) scale(59.9499 214.182)">
                    <stop stopColor="#0800B5" />
                    <stop offset="0.500518" stopColor="#7807E9" />
                    <stop offset="1" stopColor="#CB37FF" />
                </radialGradient>
            </defs>
        </svg>
    )
}
