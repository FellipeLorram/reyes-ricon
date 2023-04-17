import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> { }

export function Portifolio({ className }: Props) {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0012 24.0002L22.0012 28.0002L30.0012 20.0002M15.6707 9.39434C17.1058 9.27982 18.4681 8.71551 19.5639 7.78174C22.1208 5.6027 25.8816 5.6027 28.4386 7.78174C29.5343 8.71551 30.8967 9.27982 32.3317 9.39434C35.6806 9.66158 38.3399 12.3209 38.6071 15.6697C38.7216 17.1048 39.286 18.4672 40.2197 19.5629C42.3988 22.1199 42.3988 25.8806 40.2197 28.4376C39.286 29.5333 38.7216 30.8957 38.6071 32.3308C38.3399 35.6796 35.6806 38.3389 32.3317 38.6062C30.8967 38.7207 29.5343 39.285 28.4386 40.2188C25.8816 42.3978 22.1208 42.3978 19.5639 40.2188C18.4681 39.285 17.1058 38.7207 15.6707 38.6062C12.3218 38.3389 9.66256 35.6796 9.39531 32.3308C9.2808 30.8957 8.71648 29.5333 7.78272 28.4376C5.60368 25.8806 5.60368 22.1199 7.78272 19.5629C8.71648 18.4672 9.2808 17.1048 9.39531 15.6697C9.66256 12.3209 12.3218 9.66158 15.6707 9.39434Z" stroke="url(#paint0_radial_128_666)" stopColor="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="16" r="16" fill="#5F06DE" fillOpacity="0.16" />
            <defs>
                <radialGradient id="paint0_radial_128_666" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.62773 41.853) rotate(-44.7252) scale(62.8839 225.97)">
                    <stop stopColor="#0800B5" />
                    <stop offset="0.500518" stopColor="#7807E9" />
                    <stop offset="1" stopColor="#CB37FF" />
                </radialGradient>
            </defs>
        </svg>

    )
}
