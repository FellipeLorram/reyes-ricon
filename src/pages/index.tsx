import {About} from "@/components/layout/get-to-know-me/about";
import { Contact } from "@/components/layout/get-to-know-me/contact/contact";
import { ContactModal } from "@/components/layout/get-to-know-me/contact/contactModal";
import { Main } from "@/components/layout/get-to-know-me/main";
import { Services } from "@/components/layout/get-to-know-me/services";
import { SocialProof } from "@/components/layout/get-to-know-me/socialProof/socialProof";
import { WhyUs } from "@/components/layout/get-to-know-me/whyUs";

export default function Home() {
  return (
    <>
    <ContactModal />
    <Main />
    <Services />
    <About />
    <SocialProof />
    <WhyUs />
    <Contact />
</>  )
}
