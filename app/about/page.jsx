import About from "../components/About";
import ClientStats from "../components/ClientStats";
import Testimonials from "../components/Testimonials";
import WorkProcess from "../components/WorkProcess";
import AboutHero from "../components/AboutHero";
import ServiceCTA from "../components/ServiceCTA";
import Faq from "../components/Faq";
export default function AboutPage() {
  return (
    <>
    <AboutHero/>
     <About/>
      <WorkProcess/>
     <ClientStats/>
    <Testimonials/>
    <Faq/>
    <ServiceCTA/>
    </>
  );
}