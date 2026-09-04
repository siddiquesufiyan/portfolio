import Work from "../components/MyWork";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

import ServiceCTA from "../components/ServiceCTA";
import WorkProcess from "../components/WorkProcess";
import WorkHero from "../components/WorkHero";
export default function WorkPage() {
  return (
    <>
    <WorkHero/>
    <Work/>
    <WorkProcess/>
    <Testimonials/>
    <Faq/>
    <ServiceCTA/>
    </>
  );
}