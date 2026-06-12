import Hero from "@/components/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import Intro from "@/components/Intro";
import Treatments from "@/components/Treatments";
import HowItWorks from "@/components/HowItWorks";
import ForWho from "@/components/ForWho";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialsBar />
      <Intro />
      <Treatments />
      <HowItWorks />
      <ForWho />
      <AboutPreview />
      <Testimonials />
      <Faq />
      <Location />
    </>
  );
}
