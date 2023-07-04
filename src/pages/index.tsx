import { Footer } from "@/components/footer";
import { About } from "@/components/layout/home/about";
import { Contact } from "@/components/layout/home/contact";
import { Main } from "@/components/layout/home/main";
import { Services } from "@/components/layout/home/services";
import { SocialProof } from "@/components/layout/home/socialProof/socialProof";
import { WhyUs } from "@/components/layout/home/whyUs";

export default function Home() {
  return (
    <>
      <Main />
      <Services />
      <About />
      <SocialProof />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}
