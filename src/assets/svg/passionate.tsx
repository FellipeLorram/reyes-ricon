import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function Passionate({ className }: Props) {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#E5D7FA" />
            <path d="M11.5147 16.8477C6.82843 21.534 6.82843 29.132 11.5147 33.8183L32.0001 54.3037L52.4853 33.8183C57.1716 29.132 57.1716 21.534 52.4853 16.8477C47.799 12.1614 40.201 12.1614 35.5147 16.8477L32.0001 20.3626L28.4853 16.8477C23.799 12.1614 16.201 12.1614 11.5147 16.8477Z" stroke="url(#paint0_radial_128_793)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <radialGradient id="paint0_radial_128_793" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.3 54.3037) rotate(-40.2114) scale(78.6501 278.699)">
                    <stop stopColor="#0800B5" />
                    <stop offset="0.500518" stopColor="#7807E9" />
                    <stop offset="1" stopColor="#CB37FF" />
                </radialGradient>
            </defs>
        </svg>


    )
}
