import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function Professional({ className }: Props) {
    return (
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.668" cy="24" r="24" fill="#E5D7FA" />
            <path d="M27.3331 26.6667H14.6293C10.6646 26.6667 8.08593 30.839 9.859 34.3851L19.1923 53.0518C20.0958 54.8587 21.9425 56 23.9626 56H34.6765C35.1126 56 35.547 55.9465 35.9701 55.8408L45.9998 53.3333M27.3331 26.6667V13.3333C27.3331 10.3878 29.7209 8 32.6664 8H32.921C34.2532 8 35.3331 9.07992 35.3331 10.4121C35.3331 12.3169 35.8969 14.1791 36.9535 15.764L45.9998 29.3333V53.3333M27.3331 26.6667H32.6664M45.9998 53.3333H51.3331C54.2786 53.3333 56.6664 50.9455 56.6664 48V32C56.6664 29.0545 54.2786 26.6667 51.3331 26.6667H44.6664" stroke="url(#paint0_radial_128_800)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <radialGradient id="paint0_radial_128_800" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.59814 8.00001) rotate(45.0992) scale(83.9849 301.807)">
                    <stop stopColor="#0800B5" />
                    <stop offset="0.500518" stopColor="#7807E9" />
                    <stop offset="1" stopColor="#CB37FF" />
                </radialGradient>
            </defs>
        </svg>
    )
}
