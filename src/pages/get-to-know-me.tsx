import About from '@/components/layout/get-to-know-me/about'
import { Main } from '@/components/layout/get-to-know-me/main'
import { Services } from '@/components/layout/get-to-know-me/services'
import { SocialProof } from '@/components/layout/get-to-know-me/socialProof/socialProof'
import { WhyUs } from '@/components/layout/get-to-know-me/whyUs'
import React from 'react'

export default function GetToKnowMe() {
    return (
        <>
            <Main />
            <Services />
            <About />
            <SocialProof />
            <WhyUs />
        </>
    )
}
