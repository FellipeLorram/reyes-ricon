import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function Blog({ className }: Props) {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10H12C9.79086 10 8 11.7909 8 14V36C8 38.2091 9.79086 40 12 40H34C36.2091 40 38 38.2091 38 36V26M35.1716 7.17157C36.7337 5.60948 39.2663 5.60948 40.8284 7.17157C42.3905 8.73367 42.3905 11.2663 40.8284 12.8284L23.6568 30H18L18 24.3431L35.1716 7.17157Z" stroke="url(#paint0_radial_128_659)" stopColor="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="16" r="16" fill="#5F06DE" fillOpacity="0.16" />
            <defs>
                <radialGradient id="paint0_radial_128_659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.50417 40) rotate(-44.7252) scale(59.8801 215.176)">
                    <stop stopColor="#0800B5" />
                    <stop offset="0.500518" stopColor="#7807E9" />
                    <stop offset="1" stopColor="#CB37FF" />
                </radialGradient>
            </defs>
        </svg>
    )
}
